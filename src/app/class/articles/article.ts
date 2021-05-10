export class Article {
    private id : Number;
    private libelle : String;
    private prix : Number;
    private quantite : Number;
    private articleDescription : String;
    private etat : String;
    private photo : String;
    private categorieId : Number;
    private clientId : Number;
    private commercantId : Number;


	constructor($libelle: String, $prix: Number, $quantite: Number, $articleDescription: String, $etat: String, $photo: String, $categorieId: Number, $clientId: Number, $commercantId: Number, $id?: Number) {
		this.id = $id;
		this.libelle = $libelle;
		this.prix = $prix;
		this.quantite = $quantite;
		this.articleDescription = $articleDescription;
		this.etat = $etat;
		this.photo = $photo;
		this.categorieId = $categorieId;
		this.clientId = $clientId;
		this.commercantId = $commercantId;
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
     * Getter $prix
     * @return {Number}
     */
	public get $prix(): Number {
		return this.prix;
	}

    /**
     * Getter $quantite
     * @return {Number}
     */
	public get $quantite(): Number {
		return this.quantite;
	}

    /**
     * Getter $articleDescription
     * @return {String}
     */
	public get $articleDescription(): String {
		return this.articleDescription;
	}

    /**
     * Getter $etat
     * @return {String}
     */
	public get $etat(): String {
		return this.etat;
	}

    /**
     * Getter $photo
     * @return {String}
     */
	public get $photo(): String {
		return this.photo;
	}

    /**
     * Getter $categorieId
     * @return {Number}
     */
	public get $categorieId(): Number {
		return this.categorieId;
	}

    /**
     * Getter $clientId
     * @return {Number}
     */
	public get $clientId(): Number {
		return this.clientId;
	}

    /**
     * Getter $commercantId
     * @return {Number}
     */
	public get $commercantId(): Number {
		return this.commercantId;
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
     * Setter $prix
     * @param {Number} value
     */
	public set $prix(value: Number) {
		this.prix = value;
	}

    /**
     * Setter $quantite
     * @param {Number} value
     */
	public set $quantite(value: Number) {
		this.quantite = value;
	}

    /**
     * Setter $articleDescription
     * @param {String} value
     */
	public set $articleDescription(value: String) {
		this.articleDescription = value;
	}

    /**
     * Setter $etat
     * @param {String} value
     */
	public set $etat(value: String) {
		this.etat = value;
	}

    /**
     * Setter $photo
     * @param {String} value
     */
	public set $photo(value: String) {
		this.photo = value;
	}

    /**
     * Setter $categorieId
     * @param {Number} value
     */
	public set $categorieId(value: Number) {
		this.categorieId = value;
	}

    /**
     * Setter $clientId
     * @param {Number} value
     */
	public set $clientId(value: Number) {
		this.clientId = value;
	}

    /**
     * Setter $commercantId
     * @param {Number} value
     */
	public set $commercantId(value: Number) {
		this.commercantId = value;
	}

}
