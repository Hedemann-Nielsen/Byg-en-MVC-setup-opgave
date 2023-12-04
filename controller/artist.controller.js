import db from "../config/db.config.js";

//params = url parameter (eks. /song )
//query = get parametere (eks. /songs?id=12 )
//body = post fra en formular

class SongController {
	constructor() {
		console.log("Class SongController instantiated");
	}

	// Henter alle sange
	artistList = (req, res) => {
		const sql = `SELECT a.name 
						FROM artist a`;
		db.query(sql, (error, result) => {
			if (error) throw error;

			return res.json(result);
		});
	};

	// Henter artist detaljer
	artistDetails = (req, res) => {
		const { id } = req.params;
		const sql = `	SELECT a.name 
						FROM artist a 
						WHERE id = ?`;
		db.query(sql, [id], (error, result) => {
			console.error(error);
			return res.json(result);
		});
	};

	// Opretter ny artist
	createArtist = (req, res) => {
		const sql = `INSERT INTO artist (name) 
                        VALUES ("Tanja Hedemann")`;
		db.query(sql, (error, result) => {
			if (error) {
				console.log(error);
			} else {
				// Returnerer json med nyeste id
				return res.json({
					message: "New artist created",
					newId: result.insertId,
				});
			}
		});
	};

	// Opdater artist
	updateArtist = (req, res) => {
		// Hent data fra anmodningen
		const sql = `	UPDATE artist
						SET name = "Tanja Hedemann Nielsen" 
						WHERE id = 324;`;

		db.query(sql, (error, result) => {
			if (error) throw error;

			return res.json({
				message: "artist is opdated",
			});
		});
	};

	// Sletter artis
	deleteArtist = (req, res) => {
		const { id } = req.params;
		// SQL Statement med value markers (?)
		const sql = `DELETE FROM artist WHERE id = ?;`;
		db.query(sql, [id], (error, result) => {
			if (error) throw error;

			return res.json({
				message: "Artist with id " + id + " is deleted",
			});
		});
	};
}

export default SongController;
