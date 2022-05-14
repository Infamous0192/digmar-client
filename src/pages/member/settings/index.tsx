import type { NextPage } from 'next'
import { DashboardLayout } from 'layouts/dashboard'
import { Button, Card } from 'components/elements'
import { TextField } from 'components/forms'

const Settings: NextPage = () => {
  return (
    <DashboardLayout>
      <Card>
        <div className="p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-800 leading-none mb-6">My Account</h1>
          <section className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 leading-none mb-2">Account Profile</h2>
            <p className="mb-2">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <div className="flex flex-wrap md:flex-nowrap w-full gap-x-6 gap-y-2">
              <div className="w-full">
                <TextField type="text" name="name" label="Nama" value="Dwa Meizadewa" />
              </div>
              <div className="w-full">
                <TextField type="text" name="nohp" label="No. HP" value="089612347584" />
              </div>
              <div className="w-full">
                <TextField type="email" name="email" label="Email" value="infamous0192@gmail.com" />
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-xl font-bold text-slate-800 leading-none mb-2">Password</h2>
            <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
            <Button color="light" className="!text-sunglow-600">
              Set New Password
            </Button>
          </section>
        </div>
        <Card.Footer>
          <div className="flex justify-end">
            <Button color="light">Cancel</Button>
            <Button className="ml-4">Save Changes</Button>
          </div>
        </Card.Footer>
      </Card>
    </DashboardLayout>
  )
}

export default Settings
