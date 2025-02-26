-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_soundId_fkey`;

-- DropIndex
DROP INDEX `Users_soundId_fkey` ON `users`;

-- AlterTable
ALTER TABLE `game` MODIFY `points` INTEGER NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `isValidated` BOOLEAN NULL DEFAULT false,
    MODIFY `soundId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_soundId_fkey` FOREIGN KEY (`soundId`) REFERENCES `Sound`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
