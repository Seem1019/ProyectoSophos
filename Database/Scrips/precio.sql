create table precio (
	IDPrecio VARCHAR(40),
	IDVideoJuego VARCHAR(40),
	Precio DECIMAL(8,2),
	Ganancia DECIMAL(7,2),
	PrecioMulta INT,
	PRIMARY KEY (IDPrecio),
	CONSTRAINT fk_videojuego FOREIGN KEY(IDVideoJuego) REFERENCES videoJuego(IDVideoJuego)
);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('31df13e6-ea05-460d-bda6-40eb6edaae81', 'c7e4d5a1-3038-41bf-9f60-59debc12a877', 50867.42, 9974.06, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('8d66dff4-8fab-4cb8-8ba2-9436156a875f', 'fedb7acf-a7a5-44fd-bf94-708770e124c3', 48317.88, 76.96, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('8527199b-ec19-4a9c-8f8a-dd40ede52275', '2d3a0da4-f61f-46cd-bb10-f27a7e9f3625', 11185.11, 7107.41, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('058f643e-ed87-4e81-b758-6abf667f484b', '1464acca-bdf1-424a-9285-7518d2d087a4', 81545.58, 9693.64, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('21cf110d-5088-427a-8d60-b316b86f8eb0', '8e837a8d-a468-4226-8d55-7eb7afcba754', 69438.76, 8387.72, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('4300950e-dfde-495f-a09c-32947d4b1c05', 'eaa8ac60-5423-4ce1-9064-1149bc9b5e0c', 12024.05, 844.0, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('fe7a1bb2-ee98-4dac-a37b-b1b4ad7e38fe', 'de34e1ca-4b38-48f0-88c5-f82b9b0a7c07', 64055.66, 3442.49, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('d3018f89-3ef2-4ba1-b811-5c35821045a2', 'ec39beca-a8d3-4395-83ce-19b97b519ab2', 28242.96, 5824.39, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('ee1fcc19-5c5d-4e4d-8751-ca634d8a97ae', '1e698482-17bb-4905-a57c-11f6f3095ef1', 69043.58, 6816.4, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('8acb574e-1941-40bc-97f0-c5f12b5127c2', '589743d9-0fbe-4da0-b760-245dcd965488', 51691.85, 2729.62, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('a853271b-856a-4c14-b42b-64ae66c8d2a5', '3075bde9-6f86-48f0-84a5-a335f36b0eab', 23832.53, 6402.08, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('27401cc6-62ec-4ce3-8e56-264e672bafa9', 'aa944d0f-dc1c-4fd5-b703-12481cfebf37', 55316.86, 5084.43, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('aa41c2cd-6338-45ae-9ad5-b858346fbcf2', '3551969b-9521-4b1c-9c99-fa8bd9ae29d7', 81059.4, 3281.07, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('79bde22f-17b9-47b1-8e7f-f0b8157e477f', '47ac105a-cdbe-4944-8ecf-886e88ef8ec9', 14525.27, 7884.99, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('357a4d12-ab17-4d16-a6cf-d5344bca087b', 'bd0e2979-b673-4573-bf4d-9e612cf5ae51', 65960.4, 3096.73, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('828179a5-b95c-40c6-9578-dcb2b64df286', '75eb9b09-fafd-471f-b666-6badc85dd419', 87385.44, 2145.09, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('676d026f-c270-4ab9-bfab-16fd764cf8c0', 'ad607c11-364b-4bca-9d1a-7cf2f48e97b5', 83521.69, 4918.17, 1000);
insert into precio (IDPrecio, IDVideoJuego, Precio, Ganancia, PrecioMulta) values ('85f8de85-ee04-421b-90c6-75e7caee7a67', '648ac0af-7e59-4ddc-b98b-c83186e72c69', 91102.8, 9986.13, 1000);