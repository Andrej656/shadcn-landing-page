import logo from '@/assets/icon.png'; // Make sure the path is correct

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2 flex items-center">
          <a href="/" className="font-bold text-xl flex items-center">
            <img src={logo} alt="Signal Logo" className="mr-2 h-6 w-auto" />
            
          </a>
        </div>
        {/* rest of your code */}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 page made by{" "}
          <a
            target="_blank"
            href="https://github.com/leoMirandaa"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
           Signal d.o.o.
          </a>
        </h3>
      </section>
    </footer>
  );
};
