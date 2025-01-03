import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Nowplaying } from "../movies/now-playing";
import { Toprated } from "../movies/top-rated";
import { Popular } from "../movies/popular";
import { Upcoming } from "../movies/up-coming";

const TitleGroup = styled.h1`
    color:white;
`

const Group = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const PhotoCard = styled.div`
    position: relative;
    margin-bottom:20px;
`

const PhotoGroup = styled.img `
    width:300px;
    height:150px;
    display:flex;
`
const OverlayText = styled.div `
  position:absolute;
  bottom:10px;
  left:12px;
  background-color:#D91656;
  color:white;
  padding:5px 10px;
  border-radius:5px;
  font-size:12px;
  font-weight:bold;
  opacity:0.8;

`

const CategoryPage = () => {
    return (
        <div>
            <TitleGroup>카테고리 페이지</TitleGroup>
            <Group>
                <Link to ='/now-playing'>
                <PhotoCard>
                    <PhotoGroup 
                    src={"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832"}
                    />
                    <OverlayText>현재 상영중인</OverlayText>
                </PhotoCard>
                </Link>
                <Link to ='/popular'>
                <PhotoCard>
                    <PhotoGroup 
                    src={"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832"}
                    />
                    <OverlayText>인기있는</OverlayText>
                </PhotoCard>
                </Link>
                <Link to ='/top-rated'>
                <PhotoCard>
                    <PhotoGroup 
                    src={"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832"}
                    />
                    <OverlayText>높은 평가를 방은</OverlayText>
                </PhotoCard>
                </Link>
                <Link to ='/up-coming'>
                <PhotoCard>
                    <PhotoGroup 
                    src={"https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA2MjdfMjY0%2FMDAxNjg3Nzk0MzA2NzM3.7k0ad6tSKUV9zlTYz_QgId02kc9UTkvR6VpFC-gOk3cg.3Y4QO4jdTm1B2pqekRDZiIUeDx7HZ6QaWwPa8DW7k_Ig.JPEG.jta_akataro%2F750.jpg&type=sc960_832"}
                    />
                    <OverlayText>개봉 예정중인</OverlayText>
                </PhotoCard>
                </Link>
            </Group>
            
        </div>
    );
};

export default CategoryPage;
