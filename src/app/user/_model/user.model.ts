


export interface UserSaveTerm {
  authorityId: [number] ;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  userName: string;
}


export interface UserSearchList {
  status: Status;
  body: User[];
}

export interface Status {
  code: number;
  cause: string;
  description: string;
  message: string;
}

export interface User {
  activeStatus: string;
  authorityId: number;
  authorityName: string;
  createdBy: string;
  createdTime: string;
  email: string;
  enabled: boolean;
  firstName: string;
  id: string;
  lastName: string;
  lastPasswordResetDate: string;
  updatedBy: string;
  updatedTime: string;
  userName: string;
}

export interface UserDetail {
    body: User[];
    status: Status;
 }

 export interface UserResponse {
  status: Status;
}


 export interface  Autority {
    body: [
    {
      id: number;
      name: string;
    }
  ];
   status: {
    cause: string;
    code: string;
    description: string;
    message: string;
  };
}
