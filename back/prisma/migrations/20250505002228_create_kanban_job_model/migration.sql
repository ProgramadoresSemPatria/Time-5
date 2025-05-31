-- CreateTable
CREATE TABLE "KanbanJob" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "jobId" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "KanbanJob_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KanbanJob_userId_jobId_key" ON "KanbanJob"("userId", "jobId");

-- CreateIndex
CREATE UNIQUE INDEX "KanbanJob_userId_status_position_key" ON "KanbanJob"("userId", "status", "position");
