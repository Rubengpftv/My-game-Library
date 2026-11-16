export interface Profile {
  username: string;
  email: string;
  avatar: string;
  registrationDate: string;
  biography: string;
}

export const initialProfile: Profile = {
  username: "Detective Principal",
  email: "detective@libga-pd.com",
  avatar: "",
  registrationDate: "15/09/2024",
  biography:
    "Investigador de historias digitales. Coleccionista de experiencias y videojuegos.",
};
