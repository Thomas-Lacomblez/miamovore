export class Personne {
    private id : Number;
    private nom : String;
    private prenom : String;
    private adresse : String;
    private telephone : String;
    private email : String;
    private ville : String;
    private arrondissement : String;
     

	constructor( $nom: String, $prenom: String, $adresse: String, $telephone: String, $email: String, $ville: String, $arrondissement: String, $id?: Number) {
		this.id = $id;
		this.nom = $nom;
		this.prenom = $prenom;
		this.adresse = $adresse;
		this.telephone = $telephone;
		this.email = $email;
		this.ville = $ville;
		this.arrondissement = $arrondissement;
	}
    
    /**
     * Getter $id
     * @return {Number}
     */
	public get $id(): Number {
		return this.id;
	}

    /**
     * Getter $nom
     * @return {String}
     */
	public get $nom(): String {
		return this.nom;
	}

    /**
     * Getter $prenom
     * @return {String}
     */
	public get $prenom(): String {
		return this.prenom;
	}

    /**
     * Getter $adresse
     * @return {String}
     */
	public get $adresse(): String {
		return this.adresse;
	}

    /**
     * Getter $telephone
     * @return {String}
     */
	public get $telephone(): String {
		return this.telephone;
	}

    /**
     * Getter $email
     * @return {String}
     */
	public get $email(): String {
		return this.email;
	}

    /**
     * Getter $ville
     * @return {String}
     */
	public get $ville(): String {
		return this.ville;
	}

    /**
     * Getter $arrondissement
     * @return {String}
     */
	public get $arrondissement(): String {
		return this.arrondissement;
	}

    /**
     * Setter $id
     * @param {Number} value
     */
	public set $id(value: Number) {
		this.id = value;
	}

    /**
     * Setter $nom
     * @param {String} value
     */
	public set $nom(value: String) {
		this.nom = value;
	}

    /**
     * Setter $prenom
     * @param {String} value
     */
	public set $prenom(value: String) {
		this.prenom = value;
	}

    /**
     * Setter $adresse
     * @param {String} value
     */
	public set $adresse(value: String) {
		this.adresse = value;
	}

    /**
     * Setter $telephone
     * @param {String} value
     */
	public set $telephone(value: String) {
		this.telephone = value;
	}

    /**
     * Setter $email
     * @param {String} value
     */
	public set $email(value: String) {
		this.email = value;
	}

    /**
     * Setter $ville
     * @param {String} value
     */
	public set $ville(value: String) {
		this.ville = value;
	}

    /**
     * Setter $arrondissement
     * @param {String} value
     */
	public set $arrondissement(value: String) {
		this.arrondissement = value;
	}

   
}
