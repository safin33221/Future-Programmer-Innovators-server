/*
  Warnings:

  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_userId_fkey";

-- DropTable
DROP TABLE "students";

-- CreateTable
CREATE TABLE "members" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "session" TEXT NOT NULL,
    "profileImage" TEXT,

    CONSTRAINT "members_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "members_userId_key" ON "members"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "members_studentId_key" ON "members"("studentId");

-- AddForeignKey
ALTER TABLE "members" ADD CONSTRAINT "members_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
