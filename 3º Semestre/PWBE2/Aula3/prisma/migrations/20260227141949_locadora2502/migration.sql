/*
  Warnings:

  - A unique constraint covering the columns `[placa]` on the table `Carros` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Clientes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Carros_placa_key` ON `Carros`(`placa`);

-- CreateIndex
CREATE UNIQUE INDEX `Clientes_email_key` ON `Clientes`(`email`);
