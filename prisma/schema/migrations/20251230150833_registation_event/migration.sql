-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED', 'ATTENDED', 'NO_SHOW', 'WHITELISTED', 'REFUNDED', 'EXPIRED');

-- CreateTable
CREATE TABLE "event_registrations" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "paymentId" TEXT,
    "status" "RegistrationStatus" NOT NULL DEFAULT 'PENDING',
    "ticketTypeId" TEXT,
    "ticketNumber" TEXT,
    "seatNumber" TEXT,
    "unitPrice" DECIMAL(10,2),
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "totalAmount" DECIMAL(10,2),
    "discountCode" TEXT,
    "discountAmount" DECIMAL(10,2),
    "dietaryRequirements" TEXT,
    "specialNeeds" TEXT,
    "emergencyContact" TEXT,
    "emergencyPhone" TEXT,
    "isCheckedIn" BOOLEAN NOT NULL DEFAULT false,
    "checkedInAt" TIMESTAMP(3),
    "checkedInBy" TEXT,
    "registeredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "confirmedAt" TIMESTAMP(3),
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "event_registrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "event_feedbacks" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "event_feedbacks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "event_registrations_ticketNumber_key" ON "event_registrations"("ticketNumber");

-- CreateIndex
CREATE INDEX "event_registrations_eventId_status_idx" ON "event_registrations"("eventId", "status");

-- CreateIndex
CREATE INDEX "event_registrations_userId_status_idx" ON "event_registrations"("userId", "status");

-- CreateIndex
CREATE INDEX "event_registrations_registeredAt_idx" ON "event_registrations"("registeredAt");

-- CreateIndex
CREATE INDEX "event_registrations_status_eventId_idx" ON "event_registrations"("status", "eventId");

-- CreateIndex
CREATE INDEX "event_registrations_isCheckedIn_eventId_idx" ON "event_registrations"("isCheckedIn", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "event_registrations_eventId_userId_key" ON "event_registrations"("eventId", "userId");

-- CreateIndex
CREATE INDEX "event_feedbacks_eventId_idx" ON "event_feedbacks"("eventId");

-- CreateIndex
CREATE INDEX "event_feedbacks_userId_idx" ON "event_feedbacks"("userId");

-- CreateIndex
CREATE INDEX "event_feedbacks_rating_idx" ON "event_feedbacks"("rating");

-- CreateIndex
CREATE UNIQUE INDEX "event_feedbacks_eventId_userId_key" ON "event_feedbacks"("eventId", "userId");

-- AddForeignKey
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_registrations" ADD CONSTRAINT "event_registrations_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_feedbacks" ADD CONSTRAINT "event_feedbacks_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "event_feedbacks" ADD CONSTRAINT "event_feedbacks_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
