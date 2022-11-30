using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProyectoSophos.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitDB : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "users_data",
                columns: table => new
                {
                    iduser = table.Column<string>(name: "id_user", type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    fullname = table.Column<string>(name: "full_name", type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    identification = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    email = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    gender = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    city = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    address = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    age = table.Column<int>(type: "int", nullable: true),
                    postalcode = table.Column<string>(name: "postal_code", type: "varchar(50)", unicode: false, maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__users_da__D2D14637734108DF", x => x.iduser);
                });

            migrationBuilder.CreateTable(
                name: "video_game_data",
                columns: table => new
                {
                    idgame = table.Column<string>(name: "id_game", type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    namegame = table.Column<string>(name: "name_game", type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    director = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    maincharacter = table.Column<string>(name: "main_character", type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    producer = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    brand = table.Column<string>(type: "varchar(16)", unicode: false, maxLength: 16, nullable: true),
                    releasedate = table.Column<DateTime>(name: "release_date", type: "date", nullable: true),
                    coverpage = table.Column<string>(name: "cover_page", type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    platforms = table.Column<string>(type: "varchar(12)", unicode: false, maxLength: 12, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__video_ga__0E819B2C2A86159C", x => x.idgame);
                });

            migrationBuilder.CreateTable(
                name: "price_data",
                columns: table => new
                {
                    idprice = table.Column<string>(name: "id_price", type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    idvideogames = table.Column<string>(name: "id_video_games", type: "varchar(40)", unicode: false, maxLength: 40, nullable: true),
                    price = table.Column<decimal>(type: "decimal(8,2)", nullable: true),
                    Pricepenalty = table.Column<decimal>(name: "Price_penalty", type: "decimal(6,2)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__price_da__D8A23E836CA62DF3", x => x.idprice);
                    table.ForeignKey(
                        name: "fk_video_game",
                        column: x => x.idvideogames,
                        principalTable: "video_game_data",
                        principalColumn: "id_game");
                });

            migrationBuilder.CreateTable(
                name: "rental_data",
                columns: table => new
                {
                    idrent = table.Column<string>(name: "id_rent", type: "varchar(40)", unicode: false, maxLength: 40, nullable: false),
                    iduserrental = table.Column<string>(name: "id_user_rental", type: "varchar(40)", unicode: false, maxLength: 40, nullable: true),
                    idvideogamesrental = table.Column<string>(name: "id_video_games_rental", type: "varchar(40)", unicode: false, maxLength: 40, nullable: true),
                    retaldate = table.Column<DateTime>(name: "retal_date", type: "date", nullable: true),
                    rentalenddate = table.Column<DateTime>(name: "rental_end_date", type: "date", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__rental_d__0F4BF3B0E8DAAD5F", x => x.idrent);
                    table.ForeignKey(
                        name: "fk_usesr_rental",
                        column: x => x.iduserrental,
                        principalTable: "users_data",
                        principalColumn: "id_user");
                    table.ForeignKey(
                        name: "fk_video_games_rental",
                        column: x => x.idvideogamesrental,
                        principalTable: "video_game_data",
                        principalColumn: "id_game");
                });

            migrationBuilder.CreateIndex(
                name: "IX_price_data_id_video_games",
                table: "price_data",
                column: "id_video_games");

            migrationBuilder.CreateIndex(
                name: "IX_rental_data_id_user_rental",
                table: "rental_data",
                column: "id_user_rental");

            migrationBuilder.CreateIndex(
                name: "IX_rental_data_id_video_games_rental",
                table: "rental_data",
                column: "id_video_games_rental");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "price_data");

            migrationBuilder.DropTable(
                name: "rental_data");

            migrationBuilder.DropTable(
                name: "users_data");

            migrationBuilder.DropTable(
                name: "video_game_data");
        }
    }
}
