Create table Estudiante
(
	idEstudiante int identity,
	nombre nvarchar(25),
	apellido nvarchar(25),
	nivel nvarchar(25),
	seccion char(2),
	primary key (
		idEstudiante
	)
)
Go

Create table Curso
(
	idCurso int identity,
	nombreCurso nvarchar(30),
	idGrado nvarchar(10),
	idCarrera nvarchar(10),
	primary key (
		idCurso
	)
)
Go

Create table Catedratico
(
	idCatedratico nvarchar(10),
	nombre nvarchar(50),
	primary key (
		idCatedratico
	)
)
Go

Create table CursoCatedratico
(
	idCursoCatedratico int identity,
	idCurso int,
	idCatedratico nvarchar(10),
	estado int,
	fechaAsignacion datetime,
	fechaCulminacion datetime,
	primary key (
		idCursoCatedratico
	),
	foreign key (idCurso) references Curso(idCurso),
	foreign key (idCatedratico) references Catedratico(idCatedratico)
)
Go

Create table CursoEstudiante
(
	idCursoEstudiante int identity,
	idCurso int,
	idEstudiante int,
	estado int,
	fechaAsignacion datetime,
	fechaCulminacion datetime,
	primary key (
		idCursoEstudiante
	),
	foreign key (idCurso) references Curso(idCurso),
	foreign key (idEstudiante) references Estudiante(idEstudiante)
)
Go