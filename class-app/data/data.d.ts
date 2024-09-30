export interface Person {
	firstName: string;
	lastName: string;
	middleName?: string;
}

export interface SchoolPerson extends Person {
	id: number;
	dateOfBirth: string;
	email: string;
	phoneNumber: string;
	city: string;
	province: string | null;
	country: string;
	postalCode: string;
}

export interface Course {
	id: number;
	title: string;
	description: string;
	credits: number;
	departmentId: number;
}

export interface Department {
	id: number;
	name: string;
}

export interface Instructor extends SchoolPerson {
	departmentId: number;
	courses?: Course[];
}

export type RegistrationStatusText = 'REGISTERED' | 'WAIT LIST' | 'AUDIT' | 'DROPPED';

export interface Registration {
	id: number;
	registrationDate: string | Date;
	status: RegistrationStatusText;
	studentId: number;
	classId: number;
}

export type SemesterText = 'FALL' | 'SPRING' | 'WINTER' | 'SUMMER';

export interface ScheduledClass {
	id: number;
	seats: number;
	semester: SemesterText;
	courseId: number;
	instructorId: number;
}

export interface Student extends SchoolPerson {
	registrations?: Registration[];
	major?: number;
}

export interface Movie {
	id: number;
	title: string;
	year: number;
	rating: number;
	genres: string[];
	actors?: Person[];
	directors?: Person[];
	writers?: Person[];
}

export interface MoviePerson extends Person {
	id: number;
}

type JobText = 'ACTOR' | 'DIRECTOR' | 'WRITER' | 'CINEMATOGRAPHER' | 'PRODUCER';
export type Job = Record<JobText, JobText>;

export interface MoviesCastAndCrew {
	id: number;
	movieId: number;
	personId: number;
	job: JobText;
}
