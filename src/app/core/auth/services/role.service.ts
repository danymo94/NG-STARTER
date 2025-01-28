import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class RoleService {
  getRole(): Role {
    return window.localStorage["role"];
  }

  setRole(role: Role): void {
    window.localStorage["role"] = role;
  }

  destroyRole(): void {
    window.localStorage.removeItem("role");
  }
}

export type Role = 'admin' | 'partner';