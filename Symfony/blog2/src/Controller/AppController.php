<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AppController extends AbstractController {

    /**
    * @Route("/", name="home")
    */
    public function home(ArticleRepository $articleRepository) {
        $articles = $articleRepository->findLastFive();


        return $this->render('/app/home.html.twig', [
            'articles' => $articles
        ]);

    }

    /**
    * @Route("/a-propos", name="about")
    */
    public function about() {

        $about = new Response( '<h1> A Propos </h1>' );

        return $about;
    }
}