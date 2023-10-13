BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Sensor] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [latitude] NVARCHAR(1000) NOT NULL,
    [longitude] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Sensor_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Sensor_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Measure] (
    [id] INT NOT NULL IDENTITY(1,1),
    [temperature] NVARCHAR(1000) NOT NULL,
    [gasLevel] NVARCHAR(1000) NOT NULL,
    [luminosity] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Measure_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [sensorId] INT,
    CONSTRAINT [Measure_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Politic] (
    [id] INT NOT NULL IDENTITY(1,1),
    [temperature] NVARCHAR(1000) NOT NULL,
    [gasLevel] NVARCHAR(1000) NOT NULL,
    [luminosity] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Politic_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[Measure] ADD CONSTRAINT [Measure_sensorId_fkey] FOREIGN KEY ([sensorId]) REFERENCES [dbo].[Sensor]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
