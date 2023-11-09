import { DangerAlert } from '@/components/DangerAlert';
import { DefaultAlert } from '@/components/DefaultAlert';
import Header from '@/components/Header';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const Dashboard = () => {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="mx-20">
      <Header />
      {isSupabaseConnected ? (
        <DefaultAlert> Database is Connected.</DefaultAlert>
      ) : (
        <DangerAlert> Database is not Connected.</DangerAlert>
      )}
    </div>
  );
};

export default Dashboard;
