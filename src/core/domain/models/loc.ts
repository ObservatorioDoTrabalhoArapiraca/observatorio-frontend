import Model from '@models/model';
import DTO from '@typing/http/dto';

//TODO: melhorar a estrutura

class Cnpj extends Model {
	#cnpj!: string;
	#lat!: string;
	#long!: string;
	#end!: string;
	#end_antigo!: string;

	constructor(
		cnpj: string,
		lat: string,
		long: string,
		end: string,
		end_antigo: string
	) {
		super();
		this.#cnpj = cnpj;
		this.#lat = lat;
		this.#long = long;
		this.#end = end;
		this.#end_antigo = end_antigo;
	}

	static fromJSON(json: Record<string, unknown>): Cnpj {
		const cnpj = String(json.cnpj);
		const lat = String(json.lat);
		const long = String(json.long);
		const end = String(json.end);
		const end_antigo = String(json.end_antigo);

		return new Cnpj(cnpj, lat, long, end, end_antigo);
	}

	toJSON(): DTO {
		const dto = {} as DTO;
		dto.cnpj = this.#cnpj;
		dto.lat = this.#lat;
		dto.long = this.#long;
		dto.end = this.#end;
		dto.end_antigo = this.#end_antigo;
		return dto;
	}

	get cnpj() { return this.#cnpj; }
	get lat() { return this.#lat; }
	get long() { return this.#long; }
	get end() { return this.#end; }
	get end_antigo() { return this.#end_antigo; }
}

export default Cnpj;




