<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;


class ArticlesController extends AbstractController {

    /**
    * @Route("/articles", name="index")
    */
    public function index() {

        return $this->render('/articles/index.html.twig');
    }

    /**
    * @Route("/articles/{articleId}", name="view", requirements={"articleId"="\d+"})
    */
    public function view(int $articleId) {

        // $view = new Response( '<h1> Page de l\'article #' . $articleId . '</h1>' );
        // return $view;
        
        return $this->render('/articles/view.html.twig');

    }

    /**
    * @Route("/articles/creation", name="create", methods={"POST"})
    */
    public function create() {

        return $this->render('/articles/create.html.twig');

    }

}