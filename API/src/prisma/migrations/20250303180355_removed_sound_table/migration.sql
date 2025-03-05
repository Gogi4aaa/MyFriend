/*
  Warnings:

  - You are about to drop the `Sound` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `isValidated` BOOLEAN NULL DEFAULT false;

-- DropTable
DROP TABLE `Sound`;

-- CreateTable
CREATE TABLE `Result` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,
    `gameId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Game` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `points` INTEGER NULL,
    `modified` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
