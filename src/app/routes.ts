import { HomeComponent } from './home/home.component';
import { LineBindingComponent } from './line-binding/line-binding.component';
import { LoginComponent } from './login/login.component';
import { OpeningShiftsComponent } from './opening-shifts/opening-shifts.component';
import { PersonalShiftComponent } from './personal-shift/personal-shift.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { Mode } from './_enums/mode.enum';
import { Permission } from './_enums/permission.enum';

type RouteDef = {
  path: string;
  component: any;
  permission: Permission;
  label?: string;
  menu?: boolean;
};

export const routes = [
  {
    path: 'home',
    component: HomeComponent,
    permission: Permission.USER,
    label: 'HOME.TITLE',
  },
  {
    path: 'personal-shift',
    component: PersonalShiftComponent,
    permission: Permission.USER,
    label: 'PERSONAL_SHIFT.TITLE',
  },
  {
    path: 'shifts/available',
    component: OpeningShiftsComponent,
    permission: Permission.USER,
    label: 'AVAILABLE_SHIFTS.TITLE',
  },
  {
    path: 'shifts',
    component: ShiftsComponent,
    permission: Permission.MANAGER,
    label: 'SHIFTS.TITLE',
  },
  {
    path: 'users',
    component: UsersComponent,
    permission: Permission.MANAGER,
    label: 'USERS.TITLE',
  },
  {
    path: `users/${Mode.CREATE}`,
    component: UserComponent,
    permission: Permission.ADMINISTRATOR,
    menu: false,
  },
  {
    path: 'users/:mode/:uuid',
    component: UserComponent,
    permission: Permission.MANAGER,
    menu: false,
  },
  {
    path: 'profile',
    component: UserComponent,
    permission: Permission.USER,
    label: 'USERS.PROFILE_TITLE',
  },
  {
    path: 'login',
    component: LoginComponent,
    permission: Permission.GUEST,
    menu: false,
  },
  {
    path: 'bind',
    component: LineBindingComponent,
    permission: Permission.GUEST,
    menu: false,
  },
];
