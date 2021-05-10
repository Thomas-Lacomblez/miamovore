import { Personne } from "./personne";

export class Client extends Personne {

	constructor( $nom: String, $prenom: String, $adresse: String, $telephone: String, $email: String, $ville: String, $arrondissement: String, $id?: Number,) {
		super( $nom, $prenom, $adresse, $telephone, $email, $ville, $arrondissement);
	}
    
}
