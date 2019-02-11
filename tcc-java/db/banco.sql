DROP TABLE curtida CASCADE CONSTRAINTS PURGE;

DROP TABLE comentario CASCADE CONSTRAINTS PURGE;

DROP TABLE post CASCADE CONSTRAINTS PURGE;

DROP TABLE administrador CASCADE CONSTRAINTS PURGE;

DROP TABLE amigos CASCADE CONSTRAINTS PURGE;

DROP TABLE usuario CASCADE CONSTRAINTS PURGE;

DROP SEQUENCE identificadorusuario;

DROP SEQUENCE identificadorpost;

DROP SEQUENCE identificadorcomentario;

DROP SEQUENCE identificadoramigos;

DROP SEQUENCE identificadorcurtida;

CREATE TABLE usuario (
    id                NUMBER(19) NOT NULL,
    nome_completo     VARCHAR2(255 CHAR) NOT NULL,
    email             VARCHAR2(255 CHAR) NOT NULL UNIQUE,
    apelido           VARCHAR2(50 CHAR),
    senha             VARCHAR2(128 CHAR) NOT NULL,
    data_nascimento   DATE NOT NULL,
    ativo             NUMBER(1) NOT NULL,
    foto_perfil       VARCHAR2(512 CHAR),
    CONSTRAINT pk_pessoa PRIMARY KEY ( id )
)
TABLESPACE tcc;

CREATE TABLE amigos (
    id_amigos        NUMBER(19) NOT NULL,
    id_usuario       NUMBER(19) NOT NULL,
    id_amigo         NUMBER(19) NOT NULL,
    status_amizade   VARCHAR2(255 CHAR) NOT NULL,
    CONSTRAINT pk_amigos PRIMARY KEY ( id_amigos ),
    FOREIGN KEY ( id_usuario )
        REFERENCES usuario ( id ),
    FOREIGN KEY ( id_amigo )
        REFERENCES usuario ( id )
)
TABLESPACE tcc;

CREATE TABLE administrador (
    id   NUMBER(19) NOT NULL,
    CONSTRAINT pk_admin PRIMARY KEY ( id ),
    FOREIGN KEY ( id )
        REFERENCES usuario ( id )
)
TABLESPACE tcc;

CREATE TABLE post (
    id_post                  NUMBER(19) NOT NULL,
    titulo_post              VARCHAR2(255 CHAR) NOT NULL,
    descricao_post           VARCHAR2(2000 CHAR) NOT NULL,
    imagem_post              VARCHAR2(2000 CHAR),
    permissao   VARCHAR2(255 CHAR) NOT NULL,
    data_post                DATE NOT NULL,
    id_usuario               NUMBER(19) NOT NULL,
    CONSTRAINT pk_post PRIMARY KEY ( id_post ),
    FOREIGN KEY ( id_usuario )
        REFERENCES usuario ( id )
)
TABLESPACE tcc;


CREATE TABLE comentario (
    id_comentario     NUMBER(19) NOT NULL,
    conteudo          VARCHAR2(2000 CHAR) NOT NULL,
    data_comentario   DATE NOT NULL,
    id_usuario        NUMBER(19) NOT NULL,
    id_post           NUMBER(19) NOT NULL,
    CONSTRAINT pk_comentario PRIMARY KEY ( id_comentario ),
    FOREIGN KEY ( id_usuario )
        REFERENCES usuario ( id ),
    FOREIGN KEY ( id_post )
        REFERENCES post ( id_post )
)
TABLESPACE tcc;

CREATE TABLE curtida (
    id_curtida   NUMBER(19) NOT NULL,
    id_post         NUMBER(19) NOT NULL,
    id              NUMBER(19) NOT NULL,
    CONSTRAINT pk_curtida  PRIMARY KEY ( id_curtida),
    FOREIGN KEY ( id )
        REFERENCES usuario ( id ),
    FOREIGN KEY ( id_post )
        REFERENCES post ( id_post )
)
TABLESPACE tcc;

CREATE SEQUENCE identificadorusuario START WITH 1 INCREMENT BY 1 CACHE 20 NOCYCLE NOORDER;

CREATE SEQUENCE identificadorpost START WITH 1 INCREMENT BY 1 CACHE 20 NOCYCLE NOORDER;

CREATE SEQUENCE identificadorcomentario START WITH 1 INCREMENT BY 1 CACHE 20 NOCYCLE NOORDER;

CREATE SEQUENCE identificadoramigos START WITH 1 INCREMENT BY 1 CACHE 20 NOCYCLE NOORDER;

CREATE SEQUENCE identificadorcurtida START WITH 1 INCREMENT BY 1 CACHE 20 NOCYCLE NOORDER;
