import Model from '@models/model';
import DTO from '@typing/http/dto';

//TODO: melhorar a estrutura

class MovimentacaoCaged extends Model {
  #competenciamov!: string;
  #municipio!: string;
  #secao!: string;
  #subclasse!: string;
  #saldomovimentaçao!: number;
  #cbo2002ocupacao!: string;
  #categoria!: string;
  #graudeinstrucao!:string;
  #idade!: number;
  #horascontratuais!: number;
  #racacor!: string;
  #sexo!: string;
  #tipoempregado!:string;
  #tipoestabelecimento!: string;
  #tipomovimentação!: string;
  #tipodedeficiencia!: string;
  #indtrabintermitente!: boolean;
  #indtrabparcial!: boolean;
  #salario!: number;
  #tamestabjan!: string;
  #indicadoraprendiz!:string;
  #origemdainformacao!:string ;
  #indicadordeforadoprazo!: string;
  #unidadesalariocodigo!: string;  
  #FaixaEtaria!: string;
  #FaixaHoraContrat!: string;

	constructor(
        competenciamov: string,
        municipio: string,
        secao: string,
        subclasse: string,
        saldomovimentaçao: number,
        cbo2002ocupacao: string,
        categoria: string,
        graudeinstrucao: string,
        idade: number,
        horascontratuais: number,
        racacor: string,
        sexo: string,
        tipoempregado:string,
        tipoestabelecimento: string,
        tipomovimentação: string,
        tipodedeficiencia: string,
        indtrabintermitente: boolean,
        indtrabparcial: boolean,
        salario: number,
        tamestabjan: string,
        indicadoraprendiz:string,
        origemdainformacao:string,
        indicadordeforadoprazo: string,
        unidadesalariocodigo: string,  
        FaixaEtaria: string,
        FaixaHoraContrat: string,
	) {
		super();
        this.#competenciamov = competenciamov;
        this.#municipio = municipio;
        this.#secao = secao;
        this.#subclasse = subclasse;
        this.#saldomovimentaçao = saldomovimentaçao;
        this.#cbo2002ocupacao = cbo2002ocupacao;
        this.#categoria = categoria;
        this.#graudeinstrucao = graudeinstrucao;
        this.#idade = idade;
        this.#horascontratuais = horascontratuais;
        this.#racacor = racacor;
        this.#sexo = sexo;
        this.#tipoempregado = tipoempregado;
        this.#tipoestabelecimento = tipoestabelecimento;
        this.#tipomovimentação = tipomovimentação;
        this.#tipodedeficiencia = tipodedeficiencia;
        this.#indtrabintermitente = indtrabintermitente;
        this.#indtrabparcial = indtrabparcial;
        this.#salario = salario;
        this.#tamestabjan = tamestabjan;
        this.#indicadoraprendiz = indicadoraprendiz;
        this.#origemdainformacao = origemdainformacao ;
        this.#indicadordeforadoprazo = indicadordeforadoprazo;
        this.#unidadesalariocodigo = unidadesalariocodigo;  
        this.#FaixaEtaria = FaixaEtaria
        this.#FaixaHoraContrat = FaixaHoraContrat
	}

	static fromJSON(json: Record<string, unknown>): MovimentacaoCaged {
        const competenciamov = String(json.competenciamov);
        const municipio = String(json.municipio);
        const secao = String(json.secao);
        const subclasse = String(json.subclasse);
        const saldomovimentacao = Number(json.saldomovimentacao);
        const cbo2002ocupacao = String(json.cbo2002ocupacao);
        const categoria = String(json.categoria);
        const graudeinstrucao = String(json.graudeinstrucao);
        const idade = Number(json.idade);
        const horascontratuais = Number(json.horascontratuais);
        const racacor = String(json.racacor);
        const sexo = String(json.sexo);
        const tipoempregado = String(json.tipoempregado);
        const tipoestabelecimento = String(json.tipoestabelecimento);
        const tipomovimentacao = String(json.tipomovimentacao);
        const tipodedeficiencia = String(json.tipodedeficiencia);
        const indtrabintermitente = Boolean(json.indtrabintermitente);
        const indtrabparcial = Boolean(json.indtrabparcial);
        const salario = Number(json.salario);
        const tamestabjan = String(json.tamestabjan);
        const indicadoraprendiz = String(json.indicadoraprendiz);
        const origemdainformacao = String(json.origemdainformacao);
        const indicadordeforadoprazo = String(json.indicadordeforadoprazo);
        const unidadesalariocodigo = String(json.unidadesalariocodigo);
        const FaixaEtaria = String(json.FaixaEtaria);
        const FaixaHoraContrat = String(json.FaixaHoraContrat);
    
        return new MovimentacaoCaged(
            competenciamov,
            municipio,
            secao,
            subclasse,
            saldomovimentacao,
            cbo2002ocupacao,
            categoria,
            graudeinstrucao,
            idade,
            horascontratuais,
            racacor,
            sexo,
            tipoempregado,
            tipoestabelecimento,
            tipomovimentacao,
            tipodedeficiencia,
            indtrabintermitente,
            indtrabparcial,
            salario,
            tamestabjan,
            indicadoraprendiz,
            origemdainformacao,
            indicadordeforadoprazo,
            unidadesalariocodigo,
            FaixaEtaria,
            FaixaHoraContrat
        );
    }

	toJSON(): DTO {
        const dto = {} as DTO;
        dto.competenciamov = this.#competenciamov;
        dto.municipio = this.#municipio;
        dto.secao = this.#secao;
        dto.subclasse = this.#subclasse;
        dto.saldomovimentacao = this.#saldomovimentaçao;
        dto.cbo2002ocupacao = this.#cbo2002ocupacao;
        dto.categoria = this.#categoria;
        dto.graudeinstrucao = this.#graudeinstrucao;
        dto.idade = this.#idade;
        dto.horascontratuais = this.#horascontratuais;
        dto.racacor = this.#racacor;
        dto.sexo = this.#sexo;
        dto.tipoempregado = this.#tipoempregado;
        dto.tipoestabelecimento = this.#tipoestabelecimento;
        dto.tipomovimentacao = this.#tipomovimentação;
        dto.tipodedeficiencia = this.#tipodedeficiencia;
        dto.indtrabintermitente = this.#indtrabintermitente;
        dto.indtrabparcial = this.#indtrabparcial;
        dto.salario = this.#salario;
        dto.tamestabjan = this.#tamestabjan;
        dto.indicadoraprendiz = this.#indicadoraprendiz;
        dto.origemdainformacao = this.#origemdainformacao;
        dto.indicadordeforadoprazo = this.#indicadordeforadoprazo;
        dto.unidadesalariocodigo = this.#unidadesalariocodigo;
        dto.FaixaEtaria = this.#FaixaEtaria;
        dto.FaixaHoraContrat = this.#FaixaHoraContrat;
        return dto;
    }
    
    get competenciamov() {
        return this.#competenciamov;
    }
    
    get municipio() {
        return this.#municipio;
    }
    
    get secao() {
        return this.#secao;
    }
    
    get subclasse() {
        return this.#subclasse;
    }
    
    get saldomovimentacao() {
        return this.#saldomovimentaçao;
    }
    
    get cbo2002ocupacao() {
        return this.#cbo2002ocupacao;
    }
    
    get categoria() {
        return this.#categoria;
    }
    
    get graudeinstrucao() {
        return this.#graudeinstrucao;
    }
    
    get idade() {
        return this.#idade;
    }
    
    get horascontratuai() {
        return this.#horascontratuais;
    }
    
    get racacor() {
        return this.#racacor;
    }
    
    get sexo() {
        return this.#sexo;
    }
    
    get tipoempregado() {
        return this.#tipoempregado;
    }
    
    get tipoestabelecimento() {
        return this.#tipoestabelecimento;
    }
    
    get tipomovimentacao() {
        return this.#tipomovimentação;
    }
    
    get tipodedeficiencia() {
        return this.#tipodedeficiencia;
    }
    
    get indtrabintermitente() {
        return this.#indtrabintermitente;
    }
    
    get indtrabparcial() {
        return this.#indtrabparcial;
    }
    
    get salario() {
        return this.#salario;
    }
    
    get tamestabjan() {
        return this.#tamestabjan;
    }
    
    get indicadoraprendiz() {
        return this.#indicadoraprendiz;
    }
    
    get origemdainformacao() {
        return this.#origemdainformacao;
    }
    
    get indicadordeforadoprazo() {
        return this.#indicadordeforadoprazo;
    }
    
    get unidadesalariocodigo() {
        return this.#unidadesalariocodigo;
    }
    
    get FaixaEtaria() {
        return this.#FaixaEtaria;
    }
    
    get FaixaHoraContrat() {
        return this.#FaixaHoraContrat;
    }
    
}
    export default MovimentacaoCaged;
