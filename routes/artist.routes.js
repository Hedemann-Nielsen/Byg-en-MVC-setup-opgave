import express from "express";
import SongController from "../controller/artist.controller.js";

const router = express.Router();

// Kalder instans af klassen SongController
const artists = new SongController();

// Artist list
router.get("/artists", (req, res) => {
	artists.artistList(req, res);
});

//Opretter ny artist
router.post("/artists/create", (req, res) => {
	artists.createArtist(req, res);
});

// Hent artist detaljer
router.get("/artists/:id([0-9]*)", (req, res) => {
	artists.artistDetails(req, res);
});

// Opdater artist detaljer
router.get("/artists/update", (req, res) => {
	artists.updateArtist(req, res);
});

// Sletter artist
router.delete("/artists/:id([0-9]*)", (req, res) => {
	artists.deleteArtist(req, res);
});
// //Opretter ny sang
// router.post("/songs", (req, res) => {
// 	song.create(req, res);
// });

// // søg efter en sang
// router.get("/songs/search:keyword", (req, res) => {
// 	// Call the controller method for searching songs
// 	song.search(req, res);
// 	// const songs = song.search(req, res);

// 	// res.json(songs);
// });

export { router as ArtistRouter };
