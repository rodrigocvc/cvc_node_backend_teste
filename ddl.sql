

-- -----------------------------------------------------
-- Table mydb.HOTEL
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS HOTEL (
  CD_HOTEL serial NOT NULL ,
  NM_HOTEL VARCHAR(200) NULL,
  CD_CIDADE INT NULL,
  NM_CIDADE VARCHAR(200) NULL,
  PRIMARY KEY (CD_HOTEL));

-- -----------------------------------------------------
-- Table mydb.HOTEL_QUARTOS
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS HOTEL_QUARTOS (
  CD_HOTEL_QUARTOS serial NOT NULL,
  NM_CATEGORIA_QUARTO VARCHAR(200) NULL,
  VL_ADULTO DECIMAL(10,2) NULL,
  VL_CHD DECIMAL(2,4) NULL,
  HOTEL_CD_HOTEL INT NOT NULL,
  PRIMARY KEY (CD_HOTEL_QUARTOS),
  CONSTRAINT fk_HOTEL_QUARTOS_HOTEL
    FOREIGN KEY (HOTEL_CD_HOTEL)
    REFERENCES HOTEL (CD_HOTEL)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
