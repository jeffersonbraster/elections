const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Politicians = db.define('Politicians', {
  data_geracao: {
    type: DataTypes.STRING,
  },
  hora_geracao: {
    type: DataTypes.STRING,
  },
  ano_eleicao: {
    type: DataTypes.STRING,
  },
  cd_tipo_eleicao: {
    type: DataTypes.STRING,
  },
  nm_tipo_eleicao: {
    type: DataTypes.STRING,
  },
  num_turno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cd_eleicao: {
    type: DataTypes.STRING,
  },
  descricao_eleicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dt_eleicao: {
    type: DataTypes.STRING,
  },
  tp_abrangencia: {
    type: DataTypes.STRING,
  },
  sigla_uf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sigla_ue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_ue: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_cargo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sequencial_candidato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_candidato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_candidato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_urna_candidato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_social_candidato: {
    type: DataTypes.STRING,
  },
  cpf_candidato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nm_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },	  
  cod1_situacao_candidatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  des1_situacao_candidatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cod_situacao_candidatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  des_situacao_candidatura: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipo_legenda: {
    type: DataTypes.STRING,
  },
  numero_partido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sigla_partido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_partido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_legenda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_legenda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  composicao_legenda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_nacionalidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_nacionalidade: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sigla_uf_nascimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_municipio_nascimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nome_municipio_nascimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade_data_eleicao: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  num_titulo_eleitoral_candidato: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_sexo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cod_grau_instrucao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_grau_instrucao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_estado_civil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_estado_civil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  codigo_cor_raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_cor_raca: {
    type: DataTypes.STRING,
    allowNull: false,
  },  
  codigo_ocupacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao_ocupacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  despesa_max_campanha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cod_sit_tot_turno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc_sit_tot_turno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  st_reeleicao: {
    type: DataTypes.STRING,
  },
  st_declaracao_de_bens: {
    type: DataTypes.STRING,
  },
  nr_protocolo_candidatura: {
    type: DataTypes.STRING,
  },
  nr_processo: {
    type: DataTypes.STRING,
  },  
  CD_SITUACAO_CANDIDATO_PLEITO: {
    type: DataTypes.STRING,
  },
  DS_SITUACAO_CANDIDATO_PLEITO: {
    type: DataTypes.STRING,
  },
  CD_SITUACAO_CANDIDATO_URNA: {
    type: DataTypes.STRING,
  },
  DS_SITUACAO_CANDIDATO_URNA: {
    type: DataTypes.STRING,
  },
  ST_CANDIDATO_INSERIDO_URNA: {
    type: DataTypes.STRING,
  },
  foto_perfil: {
    type: DataTypes.STRING,
  },
})

module.exports = Politicians
