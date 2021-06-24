import React from "react";
import Link from "next/link";

const Nav = ({ categories }) => {
  return (
    <nav class="bg-white dark:bg-gray-800">
      <div class="container p-6 mx-auto">
        <p
          href="/"
          class="block cursor-pointer text-2xl font-bold text-center text-gray-800 dark:text-white hover:text-black lg:text-3xl dark:hover:text-gray-300"
        >
          Codify
        </p>

        <div class="flex items-center justify-center mt-6 text-gray-600 capitalize dark:text-gray-300">
          <a
            href="/"
            class="border-b-2 border-transparent mx-1.5 sm:mx-6 hover:text-gray-700"
          >
            home
          </a>

          <a
            href="https://nitinfab.medium.com/"
            class="border-b-2 border-transparent mx-1.5 sm:mx-6 hover:text-gray-700"
          >
            medium posts
          </a>

          {/* <a href="#" class="border-b-2 border-transparent mx-1.5 sm:mx-6">
            features
          </a> */}

          <a
            href="/about-us"
            class="border-b-2 border-transparent mx-1.5 sm:mx-6 hover:text-gray-700"
          >
            about us
          </a>
        </div>
      </div>
    </nav>

    // <nav className="uk-navbar-container" data-uk-navbar>
    //   <div className="uk-navbar-left">
    //     <ul className="uk-navbar-nav">
    //       <li>
    //         <Link href="/">
    //           <a>Strapi Blog</a>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="uk-navbar-right">
    //     <ul className="uk-navbar-nav">
    //       {categories.map((category) => {
    //         return (
    //           <li key={category.id}>
    //             <Link as={`/category/${category.slug}`} href="/category/[id]">
    //               <a className="uk-link-reset">{category.name}</a>
    //             </Link>
    //           </li>
    //         );
    //       })}
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Nav;
