import Model from '@models/model';
import DTO from '@typing/http/dto';

class Cnpj extends Model {
	#id!: string;
	#cnpj!: string;  
 	#cnpj_ordem !: string;
 	#cnpj_dv !: string;
 	#matriz_filial !: string;
 	#nome !: string;
 	#situacao_cadastral !: string;
 	#data_situacao_cadastral !: string;
 	#motivo_situacao_cadastral !: string;
 	#data_inicio_atividade !: string;
 	#cnae_secundario !: string;
 	#tipo_logradouro !: string;
 	#logradouro !: string;
 	#numero !: string;
 	#complemento !: string;
 	#bairro !: string;
 	#cep !: string;
 	#uf !: string;
 	#municipio !: string;
 	#ddd !: string;
 	#telefone !: string;
 	#email !: string;
 	#situacao_especial !: string;
 	#data_situacao_especial !: string;
 	#cnae !: string;
 	#razao_social !: string;
 	#natureza_juridica !: string;
 	#qualificacao_responsavel !: string;
 	#capital_social !: string;
 	#porte_empresa !: string;
 	#ente_federativo !: string;
 	#data !: string;

	 constructor(
		id: string,
		cnpj: string,
		cnpj_ordem: string,
		cnpj_dv: string,
		matriz_filial: string,
		nome: string,
		situacao_cadastral: string,
		data_situacao_cadastral: string,
		motivo_situacao_cadastral: string,
		data_inicio_atividade: string,
		cnae_secundario: string,
		tipo_logradouro: string,
		logradouro: string,
		numero: string,
		complemento: string,
		bairro: string,
		cep: string,
		uf: string,
		municipio: string,
		ddd: string,
		telefone: string,
		email: string,
		situacao_especial: string,
		data_situacao_especial: string,
		cnae: string,
		razao_social: string,
		natureza_juridica: string,
		qualificacao_responsavel: string,
		capital_social: string,
		porte_empresa: string,
		ente_federativo: string,
		data: string
	) {
		super();

		this.#id = id;
		this.#cnpj = cnpj;
		this.#cnpj_ordem = cnpj_ordem;
		this.#cnpj_dv = cnpj_dv;
		this.#matriz_filial = matriz_filial;
		this.#nome = nome;
		this.#situacao_cadastral = situacao_cadastral;
		this.#data_situacao_cadastral = data_situacao_cadastral;
		this.#motivo_situacao_cadastral = motivo_situacao_cadastral;
		this.#data_inicio_atividade = data_inicio_atividade;
		this.#cnae_secundario = cnae_secundario;
		this.#tipo_logradouro = tipo_logradouro;
		this.#logradouro = logradouro;
		this.#numero = numero;
		this.#complemento = complemento;
		this.#bairro = bairro;
		this.#cep = cep;
		this.#uf = uf;
		this.#municipio = municipio;
		this.#ddd = ddd;
		this.#telefone = telefone;
		this.#email = email;
		this.#situacao_especial = situacao_especial;
		this.#data_situacao_especial = data_situacao_especial;
		this.#cnae = cnae;
		this.#razao_social = razao_social;
		this.#natureza_juridica = natureza_juridica;
		this.#qualificacao_responsavel = qualificacao_responsavel;
		this.#capital_social = capital_social;
		this.#porte_empresa = porte_empresa;
		this.#ente_federativo = ente_federativo;
		this.#data = data;
	}

	static fromJSON(json: Record<string, unknown>): Cnpj {
		const id = String(json.id);
		const cnpj = String(json.cnpj);
		const cnpj_ordem = String(json.cnpj_ordem);
		const cnpj_dv = String(json.cnpj_dv);
		const matriz_filial = String(json.matriz_filial);
		const nome = String(json.nome);
		const situacao_cadastral = String(json.situacao_cadastral);
		const data_situacao_cadastral = String(json.data_situacao_cadastral);
		const motivo_situacao_cadastral = String(json.motivo_situacao_cadastral);
		const data_inicio_atividade = String(json.data_inicio_atividade);
		const cnae_secundario = String(json.cnae_secundario);
		const tipo_logradouro = String(json.tipo_logradouro);
		const logradouro = String(json.logradouro);
		const numero = String(json.numero);
		const complemento = String(json.complemento);
		const bairro = String(json.bairro);
		const cep = String(json.cep);
		const uf = String(json.uf);
		const municipio = String(json.municipio);
		const ddd = String(json.ddd);
		const telefone = String(json.telefone);
		const email = String(json.email);
		const situacao_especial = String(json.situacao_especial);
		const data_situacao_especial = String(json.data_situacao_especial);
		const cnae = String(json.cnae);
		const razao_social = String(json.razao_social);
		const natureza_juridica = String(json.natureza_juridica);
		const qualificacao_responsavel = String(json.qualificacao_responsavel);
		const capital_social = String(json.capital_social);
		const porte_empresa = String(json.porte_empresa);
		const ente_federativo = String(json.ente_federativo);
		const data = String(json.data);
	
		return new Cnpj(
			id,
			cnpj,
			cnpj_ordem,
			cnpj_dv,
			matriz_filial,
			nome,
			situacao_cadastral,
			data_situacao_cadastral,
			motivo_situacao_cadastral,
			data_inicio_atividade,
			cnae_secundario,
			tipo_logradouro,
			logradouro,
			numero,
			complemento,
			bairro,
			cep,
			uf,
			municipio,
			ddd,
			telefone,
			email,
			situacao_especial,
			data_situacao_especial,
			cnae,
			razao_social,
			natureza_juridica,
			qualificacao_responsavel,
			capital_social,
			porte_empresa,
			ente_federativo,
			data
		);
	}

	toJSON(): DTO {
		const dto = {} as DTO;
		dto.id = this.#id;
		dto.cnpj = this.#cnpj;
		dto.cnpj_ordem = this.#cnpj_ordem;
		dto.cnpj_dv = this.#cnpj_dv;
		dto.matriz_filial = this.#matriz_filial;
		dto.nome = this.#nome;
		dto.situacao_cadastral = this.#situacao_cadastral;
		dto.data_situacao_cadastral = this.#data_situacao_cadastral;
		dto.motivo_situacao_cadastral = this.#motivo_situacao_cadastral;
		dto.data_inicio_atividade = this.#data_inicio_atividade;
		dto.cnae_secundario = this.#cnae_secundario;
		dto.tipo_logradouro = this.#tipo_logradouro;
		dto.logradouro = this.#logradouro;
		dto.numero = this.#numero;
		dto.complemento = this.#complemento;
		dto.bairro = this.#bairro;
		dto.cep = this.#cep;
		dto.uf = this.#uf;
		dto.municipio = this.#municipio;
		dto.ddd = this.#ddd;
		dto.telefone = this.#telefone;
		dto.email = this.#email;
		dto.situacao_especial = this.#situacao_especial;
		dto.data_situacao_especial = this.#data_situacao_especial;
		dto.cnae = this.#cnae;
		dto.razao_social = this.#razao_social;
		dto.natureza_juridica = this.#natureza_juridica;
		dto.qualificacao_responsavel = this.#qualificacao_responsavel;
		dto.capital_social = this.#capital_social;
		dto.porte_empresa = this.#porte_empresa;
		dto.ente_federativo = this.#ente_federativo;
		dto.data = this.#data;
		return dto;
	}
	
	get id() { return this.#id; }
	get cnpj() { return this.#cnpj; }
	get cnpj_ordem() { return this.#cnpj_ordem; }
	get cnpj_dv() { return this.#cnpj_dv; }
	get matriz_filial() { return this.#matriz_filial; }
	get nome() { return this.#nome; }
	get situacao_cadastral() { return this.#situacao_cadastral; }
	get data_situacao_cadastral() { return this.#data_situacao_cadastral; }
	get motivo_situacao_cadastral() { return this.#motivo_situacao_cadastral; }
	get data_inicio_atividade() { return this.#data_inicio_atividade; }
	get cnae_secundario() { return this.#cnae_secundario; }
	get tipo_logradouro() { return this.#tipo_logradouro; }
	get logradouro() { return this.#logradouro; }
	get numero() { return this.#numero; }
	get complemento() { return this.#complemento; }
	get bairro() { return this.#bairro; }
	get cep() { return this.#cep; }
	get uf() { return this.#uf; }
	get municipio() { return this.#municipio; }
	get ddd() { return this.#ddd; }
	get telefone() { return this.#telefone; }
	get email() { return this.#email; }
	get situacao_especial() { return this.#situacao_especial; }
	get data_situacao_especial() { return this.#data_situacao_especial; }
	get cnae() { return this.#cnae; }
	get razao_social() { return this.#razao_social; }
	get natureza_juridica() { return this.#natureza_juridica; }
	get qualificacao_responsavel() { return this.#qualificacao_responsavel; }
	get capital_social() { return this.#capital_social; }
	get porte_empresa() { return this.#porte_empresa; }
	get ente_federativo() { return this.#ente_federativo; }
	get data() { return this.#data; }
	
}

export default Cnpj;

