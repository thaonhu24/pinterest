import React, { useRef, useState, useEffect } from "react";
import './Header.scss'
import Notify from '../Notify/Notify';
import SearchList from "../SearchList/SearchList";
import useGetUser from "../../hooks/useGetUser";

function Header(props) {


    //click outside
    const [clickedOutside, setClickedOutside] = useState(true);
    const myRef = useRef();
    const handleClickOutside = e => {

        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);

        }
        else setClickedOutside(false)

    };
    const handleClickInside = () => {
        setClickedOutside(false)

    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    });

    const handlerOpen = () => {
        setClickedOutside(false)
        let search = document.getElementsByClassName('search-list')[0]
       
        search.style.display = 'none'

    }
    //search
    const listSearch = useGetUser('https://jsonplaceholder.typicode.com/todos');
    const [search, setSearch] = useState(listSearch)
    const handlerSearch = (e) => {
        document.getElementsByClassName('icon-search')[0].style.display = 'none';
        document.getElementsByClassName('search')[0].style.border = 'rgb(0 132 255 / 50%) 4px solid'
        document.getElementsByClassName('overlay')[0].classList.add('over')
        document.getElementsByClassName('notify')[0].classList.remove('active')
        document.getElementsByClassName('search-list')[0].style.display = 'block'

        var searchQuery = e.target.value.toLowerCase();
        var displayedContacts = listSearch.filter(function (el) {
            var searchValue = el.title;

            return searchValue.indexOf(searchQuery) !== -1;
        });

        setSearch(displayedContacts)
    };
    
    return (
        <div className={`header ${props.bg?"light":"header-dark"}`} >
            
            <div className="logo">
                <img src="image/logo.png" alt="" />
            </div>
            <div className="btn-home">
                <button>Home</button>
            </div>
            <div className="search" onClick={handlerSearch}>
                    <form action="">
                        <div className="icon-search">
                            <img src="image/search.png" alt="" />
                        </div>
                        <input type="text" placeholder="Search"  onChange={handlerSearch}/>
                    </form>
                    <SearchList list={search}></SearchList>
                </div>
            <div className="noti-control">
                <div className="icon-noti">
                    <img onClick={handlerOpen} src="image/notify.png" alt="" />
                    <div ref={myRef} onClick={handleClickInside}>
                        <Notify class={clickedOutside ? " " : "active "} />
                    </div>
                </div>
                <div className="icon-mess">
                    <img src="image/chat.png" alt="" />
                </div>

                    <div className="img-profile">
                        <img src="https://taimienphi.vn/tmp/cf/aut/mAKI-top-anh-dai-dien-dep-chat-1.jpg" alt="" />
                    </div>
                    <div className="icon-arrow">
                        <img src="https://cdn-user-icons.flaticon.com/26841/26841521/1645174779729.svg?token=exp=1645175680~hmac=bc6a7145192a3e42d24ee43bb2bb2dfd" alt="" />
                    </div>
                
            </div>
        </div>
    )
}
export default Header;