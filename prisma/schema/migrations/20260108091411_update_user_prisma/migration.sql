/*
  Warnings:

  - You are about to drop the column `department` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `session` on the `members` table. All the data in the column will be lost.
  - You are about to drop the column `permissions` on the `moderators` table. All the data in the column will be lost.
  - Added the required column `departmentId` to the `members` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `members` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "profileImage" TEXT;

-- AlterTable
ALTER TABLE "members" DROP COLUMN "department",
DROP COLUMN "session",
ADD COLUMN     "departmentId" TEXT NOT NULL,
ADD COLUMN     "sessionId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "mentors" ADD COLUMN     "profileImage" TEXT;

-- AlterTable
ALTER TABLE "moderators" DROP COLUMN "permissions";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "emailVerifiedAt" TIMESTAMP(3),
ADD COLUMN     "isDelete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastLoginAt" TIMESTAMP(3),
ADD COLUMN     "passwordChangedAt" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "permissions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "permissions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moderator_permissions" (
    "moderatorId" TEXT NOT NULL,
    "permissionId" TEXT NOT NULL,

    CONSTRAINT "moderator_permissions_pkey" PRIMARY KEY ("moderatorId","permissionId")
);

-- CreateIndex
CREATE UNIQUE INDEX "permissions_name_key" ON "permissions"("name");

-- CreateIndex
CREATE INDEX "moderator_permissions_moderatorId_idx" ON "moderator_permissions"("moderatorId");

-- CreateIndex
CREATE INDEX "moderator_permissions_permissionId_idx" ON "moderator_permissions"("permissionId");

-- CreateIndex
CREATE INDEX "admins_userId_idx" ON "admins"("userId");

-- AddForeignKey
ALTER TABLE "moderator_permissions" ADD CONSTRAINT "moderator_permissions_moderatorId_fkey" FOREIGN KEY ("moderatorId") REFERENCES "moderators"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "moderator_permissions" ADD CONSTRAINT "moderator_permissions_permissionId_fkey" FOREIGN KEY ("permissionId") REFERENCES "permissions"("id") ON DELETE CASCADE ON UPDATE CASCADE;
