<?php
namespace App\Controller;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
/**
 * On préfixe toutes les routes du controller par "/articles"
 * @Route("/articles")
 */
class ArticleController extends AbstractController {
    /**
     * Afficher tous les articles
     * 
     * @Route("/", name="article_index", methods={"GET"})
     */
    public function index() {
        
        return $this->render('/article/index.html.twig');

    }

    /**
     * Afficher un article
     * 
     * @Route("/{article}", name="article_show", methods={"GET"})
     */
    public function show(int $article) {

        return $this->render('/article/show.html.twig', compact('article'));

    }

    /**
     * Afficher le formulaire de création d'un article
     * 
     * @Route("/create", name="article_create", methods={"GET"})
     */
    public function create() {

        return $this->render('/article/create.html.twig');

    }
    /**
     * Traiter le formulaire de création d'un article
     * 
     * @Route("/", name="article_new", methods={"POST"})
     */
    public function new() {
        
    }
}