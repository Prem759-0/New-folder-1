'use client';

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { LogOutIcon, VideoIcon, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation"; 
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Channel,
  Window,
  Thread,
  useChatContext,
  ChannelHeader,
  MessageList,
  MessageInput,
} from "stream-chat-react";

function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const { channel, setActiveChannel } = useChatContext();
  const { setOpen } = useSidebar();
  const [isLeavingChat, setIsLeavingChat] = useState(false);
  const [isStartingCall, setIsStartingCall] = useState(false);

  const handleCall = async () => {
    if (!channel) return;
    
    setIsStartingCall(true);
    try {
      router.push(`/dashboard/video-call/${channel.id}`);
      setOpen(false);
    } finally {
      setIsStartingCall(false);
    }
  };

  const handleLeaveChat = async () => {
    if (!channel || !user?.id) return;

    const confirmLeave = window.confirm("Are you sure you want to leave the chat?");
    if (!confirmLeave) return;

    setIsLeavingChat(true);
    try {
      // Remove current user from channel
      await channel.removeMembers([user.id]);

      setActiveChannel(undefined);

      router.push("/dashboard");
    } catch (error) {
      console.error("Error leaving chat", error);
      alert("Failed to leave chat. Please try again.");
    } finally {
      setIsLeavingChat(false);
    }
  };

  return (
    <div className="flex flex-col w-full flex-1">
      {channel ? (
        <Channel>
          <Window>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-3 lg:gap-4 p-2 sm:p-4">
              <div className="flex-1 min-w-0">
                {channel.data?.member_count === 1 ? (
                  <ChannelHeader title="Everyone else has left this chat!" />
                ) : (
                  <ChannelHeader />
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2 w-full sm:w-auto lg:w-auto">
                <Button 
                  variant="outline" 
                  onClick={handleCall}
                  disabled={isStartingCall}
                  className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base min-w-[120px] sm:min-w-[140px]"
                >
                  {isStartingCall ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <VideoIcon className="w-4 h-4 mr-2" />
                  )}
                  {isStartingCall ? "Starting..." : "Video Call"}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleLeaveChat}
                  disabled={isLeavingChat}
                  className="w-full sm:w-auto px-4 py-2 text-sm sm:text-base min-w-[120px] sm:min-w-[140px] text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 disabled:opacity-50"
                >
                  {isLeavingChat ? (
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                  ) : (
                    <LogOutIcon className="w-4 h-4 mr-2" />
                  )}
                  {isLeavingChat ? "Leaving..." : "Leave Chat"}
                </Button>
              </div>
            </div>

            <MessageList />

            <div className="sticky bottom-0 w-full">
              <MessageInput />
            </div>
          </Window>
          <Thread />
        </Channel>
      ) : (
        <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-2xl font-semibold text-muted-foreground mb-4">
            No chat selected
          </h2>
          <p className="text-muted-foreground">
            Select a chat from the sidebar or start a new conversation
          </p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
