<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use App\Repository\CategoryRepository;
use App\Repository\TagRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class AppController extends AbstractController {

    /**
    * @Route("/", name="home")
    */
    public function home(ArticleRepository $articleRepository, CategoryRepository $categoryRepository, TagRepository $tagRepository) {
        $articles = $articleRepository->findLastFive();
        $categories = $categoryRepository->findLastFive();
        $tags = $tagRepository->findLastFive();

        return $this->render('/app/home.html.twig', [
            'articles' => $articles,
            'categories' => $categories,
            'tags' => $tags
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