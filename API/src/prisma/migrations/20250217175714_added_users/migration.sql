-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `validation_code` VARCHAR(255) NULL,
    `isValidated` BOOLEAN NOT NULL DEFAULT false,
    `created` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `modified` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Users_id_key`(`id`),
    UNIQUE INDEX `Users_username_key`(`username`),
    UNIQUE INDEX `Users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
