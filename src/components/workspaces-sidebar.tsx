import { UserProfile } from './user-profile';
import { WorkspaceSettings } from './workspace-settings';

export const WorkspacesSidebar = () => {
  return (
    <div className='rounded-2xl bg-white shadow-card w-full max-w-[294px] h-full flex flex-col'>
      <div className=""></div>
      <div className="p-2 grow"></div>
      <div className="flex items-center justify-between p-6">
        <UserProfile />
        <WorkspaceSettings/>
      </div>
    </div>
  )
}
