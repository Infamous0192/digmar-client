import { Button, Link } from 'components/elements'
import { TextField } from 'components/forms'
import { LandingLayout } from 'layouts/landing'

const CheckoutPage: React.FC = () => {
  return (
    <LandingLayout>
      <main className="flex-grow py-12">
        <div className="max-w-7xl py-16 md:pb-20 mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
              <div className="bg-white rounded-lg shadow p-5">
                <h1 className="text-lg font-semibold mb-4">Detail Transaksi</h1>
                <div className="border border-slate-200 rounded-md flex overflow-hidden">
                  <div className="w-24 h-24 bg-slate-200 flex-shrink-0"></div>
                  <div className="p-4">
                    <div className="font-medium">Kelas Digital Marketing</div>
                    <div className="text-sunglow-600 font-semibold">Rp. 100.000</div>
                  </div>
                </div>
                <section className="mt-2">
                  <div className="flex items-center justify-between py-2">
                    <div className="flex-grow-1">Kelas Digital Marketing</div>
                    <div className="font-bold flex-shrink-0">Rp. 100.000</div>
                  </div>
                  <div className="flex items-center justify-between py-4 text-lg">
                    <div className="flex-grow-1 font-bold">Total</div>
                    <div className="font-bold flex-shrink-0">Rp. 110.000</div>
                  </div>
                </section>
              </div>
            </div>

            <div className="md:col-span-4">
              <div className="bg-white rounded-lg shadow p-5">
                <h1 className="text-lg font-semibold mb-4">Data Pengguna</h1>
                <div className="mb-4">
                  <h2 className="font-semibold mb-2">Nama Lengkap</h2>
                  <TextField type="text" name="nama" value="Dwa Meizadewa" readOnly />
                  <p className="text-sm">
                    Nama lengkap yang benar dibutuhkan untuk sertifikat nantinya
                  </p>
                </div>
                <div className="mb-4">
                  <h2 className="font-semibold mb-2">Alamat Email</h2>
                  <TextField type="text" name="nama" value="infamous0192@gmail.com" readOnly />
                  <p className="text-sm">Invoice dan informasi kelas akan dikirim via Email</p>
                </div>
                <Link to="/member/transaksi/12345">
                  <Button color="secondary" className="w-full mb-4">
                    Selanjutnya
                  </Button>
                </Link>
                <p className="font-light text-sm text-slate-700 px-2 text-center italic leading-snug">
                  By checking out you agree with our Terms of Service
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </LandingLayout>
  )
}

export default CheckoutPage
