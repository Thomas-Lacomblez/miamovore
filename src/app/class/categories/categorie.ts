export class Categorie {
    private id : Number;
    private libelle : String;
    private photo : String;
    private nom : String;
    private description : String;
    

	constructor($libelle: String, $photo: String, $nom: String, $description: String, $id?: Number) {
		this.id = $id;
		this.libelle = $libelle;
		this.photo = $photo;
		this.nom = $nom;
		this.description = $description;
	}

    /**
     * Getter $id
     * @return {Number}
     */
	public get $id(): Number {
		return this.id;
	}

    /**
     * Getter $libelle
     * @return {String}
     */
	public get $libelle(): String {
		return this.libelle;
	}

    /**
     * Getter $photo
     * @return {String}
     */
	public get $photo(): String {
		return this.photo;
	}

    /**
     * Getter $nom
     * @return {String}
     */
	public get $nom(): String {
		return this.nom;
	}

    /**
     * Getter $description
     * @return {String}
     */
	public get $description(): String {
		return this.description;
	}

    /**
     * Setter $id
     * @param {Number} value
     */
	public set $id(value: Number) {
		this.id = value;
	}

    /**
     * Setter $libelle
     * @param {String} value
     */
	public set $libelle(value: String) {
		this.libelle = value;
	}

    /**
     * Setter $photo
     * @param {String} value
     */
	public set $photo(value: String) {
		this.photo = value;
	}

    /**
     * Setter $nom
     * @param {String} value
     */
	public set $nom(value: String) {
		this.nom = value;
	}

    /**
     * Setter $description
     * @param {String} value
     */
	public set $description(value: String) {
		this.description = value;
	}

}
