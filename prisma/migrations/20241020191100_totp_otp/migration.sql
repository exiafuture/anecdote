-- AlterTable
ALTER TABLE `User` ADD COLUMN `totpEnabled` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `totpSecret` VARCHAR(191) NULL;
