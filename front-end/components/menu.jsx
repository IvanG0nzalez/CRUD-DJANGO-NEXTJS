"use client";

import { useRouter } from "next/navigation";

export default function Menu() {

    const router = useRouter();

    return (
        <nav>
            <ul>
                <li className="li-nav">
                    <button
                        className="menu-item"
                        onClick={() => router.push("/movies")}
                    >
                        <i className="fas fa-book"></i> Movies
                    </button>
                </li>
                <li className="li-nav">
                    <button
                        className="menu-item"
                        onClick={() => router.push("/directors")}
                    >
                        <i className="fas fa-user"></i> Directors
                    </button>
                </li>
                <li className="li-nav">
                    <button
                        className="menu-item"
                        onClick={() => router.push("/genres")}
                    >
                        <i className="fas fa-user"></i> Genres
                    </button>
                </li>
            </ul>

            <style jsx>{`
       			nav {
					display: flex;
					background-color: #333;
					color: white;
				}

				ul {
                    width: 100%;
					display: flex;
                    justify-content: left;
					list-style: none;
                    margin-bottom: 3px;
                    margin-top: 3px;
				}

				.li-nav {
					margin-right: 20px;
					margin-left: 20px;
					margin-top: 5px;
                    margin-bottom: 5px;
				}

				.menu-item {
                    background-color: transparent;
                    color: white;
                    border: none;
					border-radius: 5px;
					padding: 5px 5px;
				}

				.menu-item:hover {
					background-color: #666;
				}

				@media (max-width: 438px) {
					ul {
						flex-direction: column;
						padding: 5px;
					}

					.li-nav {
						margin: 6px 12px;
					}
				}
			`}</style>
        </nav>
    );
}