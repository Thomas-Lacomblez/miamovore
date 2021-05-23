import { Injectable } from "@angular/core";

@Injectable()
export class Article {
    private id : number;
    private libelle : string;
    private prix : number;
    private quantite : number;
    private articleDescription : string;
    private etat : string;
    private photo : string;
    private categorieId : number;
    private clientId : number;
    private commercantId : number;


	constructor($libelle: string, $prix: number, $quantite: number, $articleDescription: string, $etat: string, $photo: string, $categorieId: number, $clientId: number, $commercantId: number, $id?: number) {
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
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $libelle
     * @return {string}
     */
	public get $libelle(): string {
		return this.libelle;
	}

    /**
     * Getter $prix
     * @return {number}
     */
	public get $prix(): number {
		return this.prix;
	}

    /**
     * Getter $quantite
     * @return {number}
     */
	public get $quantite(): number {
		return this.quantite;
	}

    /**
     * Getter $articleDescription
     * @return {string}
     */
	public get $articleDescription(): string {
		return this.articleDescription;
	}

    /**
     * Getter $etat
     * @return {string}
     */
	public get $etat(): string {
		return this.etat;
	}

    /**
     * Getter $photo
     * @return {string}
     */
	public get $photo(): string {
		return this.photo;
	}

    /**
     * Getter $categorieId
     * @return {number}
     */
	public get $categorieId(): number {
		return this.categorieId;
	}

    /**
     * Getter $clientId
     * @return {number}
     */
	public get $clientId(): number {
		return this.clientId;
	}

    /**
     * Getter $commercantId
     * @return {number}
     */
	public get $commercantId(): number {
		return this.commercantId;
	}

    /**
     * Setter $id
     * @param {number} value
     */
	public set $id(value: number) {
		this.id = value;
	}

    /**
     * Setter $libelle
     * @param {string} value
     */
	public set $libelle(value: string) {
		this.libelle = value;
	}

    /**
     * Setter $prix
     * @param {number} value
     */
	public set $prix(value: number) {
		this.prix = value;
	}

    /**
     * Setter $quantite
     * @param {number} value
     */
	public set $quantite(value: number) {
		this.quantite = value;
	}

    /**
     * Setter $articleDescription
     * @param {string} value
     */
	public set $articleDescription(value: string) {
		this.articleDescription = value;
	}

    /**
     * Setter $etat
     * @param {string} value
     */
	public set $etat(value: string) {
		this.etat = value;
	}

    /**
     * Setter $photo
     * @param {string} value
     */
	public set $photo(value: string) {
		this.photo = value;
	}

    /**
     * Setter $categorieId
     * @param {number} value
     */
	public set $categorieId(value: number) {
		this.categorieId = value;
	}

    /**
     * Setter $clientId
     * @param {number} value
     */
	public set $clientId(value: number) {
		this.clientId = value;
	}

    /**
     * Setter $commercantId
     * @param {number} value
     */
	public set $commercantId(value: number) {
		this.commercantId = value;
	}

}
