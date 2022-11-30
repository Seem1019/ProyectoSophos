create table price_data (
	id_price VARCHAR(40),
	id_video_games VARCHAR(40),
	price DECIMAL(8,2),
	Price_penalty DECIMAL(6,2),
	PRIMARY KEY (id_price),
	CONSTRAINT fk_video_game FOREIGN KEY(id_video_games) REFERENCES [dbo].[video_game_data](id_game)
);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('f2982c4b-77b7-401d-afb2-1d16845336fc', '7a012c42-0106-4398-9740-d528233d8722', 98912.87, 843.49);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('8679bdf7-feb9-4a91-aff5-ea8494f5ad0c', '5874cbb0-5384-407a-8eaf-55d7aa9a2a5c', 61487.16, 273.25);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('fa57cc18-fb4e-4454-8a20-276a8ecfe126', '940219fa-c1c3-41f4-aeb1-973a9862148b', 80171.98, 423.58);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('06a342c2-60e6-40f8-bad2-23e9bb588345', 'd9c3539d-1bdd-458f-b39d-8bf95ed3d454', 37787.17, 537.45);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('519a0fad-d87c-47e2-a24c-39ccb1769174', 'c0f70fce-7f0d-43c0-9191-54dc364c3f61', 82257.79, 327.36);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('a4ad30bc-3846-4caa-a2d0-b9472a8e1a63', 'ff3fa08a-25a2-45c7-9633-748a64ba301e', 71604.93, 534.73);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('f422c116-03ad-4679-aad7-4a49e1371735', '6250aa2e-e8ef-435e-bb0d-c8bc03aca79b', 84008.61, 907.09);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('0c42349f-e27b-4ae7-977e-dcc5eaf1029e', '875114c3-87da-4a34-8228-8009ccfda462', 93399.05, 883.47);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('4c314a0d-81b9-481e-a404-662504e3dbd5', '82dc8a1f-9526-4ede-bcc8-81989ab9ebd1', 84938.11, 524.83);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('0b31b3fc-998c-43e5-bc3a-bf12737896f3', 'aede924e-3585-4652-afdf-2e4db9bed0ad', 54541.52, 621.22);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('cae78f8e-6832-43ab-84a8-5e4281ff8d80', '027f08e3-ef2a-404d-90de-1aecafa4ed1c', 24687.16, 252.69);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('5a4239e5-8dfb-4ced-bf14-49fe78d00db9', '22a86a92-dd22-496e-911e-9b41bc2ba32a', 92223.1, 770.97);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('3cac8a9c-a93a-4a27-9029-d9d4bdc190fa', 'a7b81aea-9e07-4216-8d85-f3252ecdf571', 32102.66, 679.86);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('e02fe34a-4530-45ba-b550-072c6b356893', '82de85ba-9f4a-4f6a-b793-2be05fd3e1d0', 28543.66, 256.34);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('9b245f55-58a2-46f8-b493-449b4a930f85', '39e4d232-08bf-4c9c-b383-62f1c8c22129', 58395.09, 292.3);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('095d2faf-8834-46e4-b81a-bb70bf2a1d97', '3ef61a74-ece0-42ae-bc82-3b5800165823', 28976.97, 865.46);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('7d12894b-aa19-409d-ad1d-5d39193054ea', '0dcf245e-967e-4005-b343-23c3adb30013', 56171.12, 406.84);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('0851c780-229c-448b-8ee9-35bb3cadabb6', 'ca9227a4-3f59-4f76-9372-82236999ec4e', 80732.86, 162.87);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('88b21425-cc75-414a-9b46-7c6aadd86acb', '2e3ed78a-a0c6-49bb-a3ae-4681bdc9fa7d', 49696.3, 682.1);
insert into price_data (id_price, id_video_games, price, Price_penalty) values ('66e350a7-8c48-4248-9770-40b7d4c499cd', '12f115da-77bb-4732-b120-66fa33686be0', 93830.17, 361.24);
