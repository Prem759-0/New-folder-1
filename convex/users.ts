import { query, mutation } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import type { QueryCtx, MutationCtx } from "./_generated/server";

// Get user by Clerk userId
export const getUserByClerkUserId = query({
  args: { userId: v.string() },
  handler: async (ctx: QueryCtx, { userId }: { userId: string }) => {
    if (!userId) return null;

    return await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId)) // ✅ no any
      .first();
  },
});

// Insert or update user
export const upsertUser = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    email: v.string(),
    imageUrl: v.string(),
  },
  handler: async (
    ctx: MutationCtx,
    { userId, name, email, imageUrl }: { userId: string; name: string; email: string; imageUrl: string }
  ) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_userId", (q) => q.eq("userId", userId)) // ✅ no any
      .first();

    if (existingUser) {
      await ctx.db.patch(existingUser._id as Id<"users">, { name, imageUrl });
      return existingUser._id;
    }

    return await ctx.db.insert("users", { userId, name, email, imageUrl });
  },
});

// Search users by name or email
export const searchUsers = query({
  args: { searchTerm: v.string() },
  handler: async (ctx: QueryCtx, { searchTerm }: { searchTerm: string }) => {
    if (!searchTerm.trim()) return [];

    const normalizedSearch = searchTerm.toLowerCase().trim();
    const allUsers = await ctx.db.query("users").collect();

    return allUsers
      .filter(
        (user) =>
          user.name.toLowerCase().includes(normalizedSearch) ||
          user.email.toLowerCase().includes(normalizedSearch)
      )
      .slice(0, 20);
  },
});
