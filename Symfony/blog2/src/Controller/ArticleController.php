<?php
namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
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
        $articleRepository = $this->getDoctrine()->getRepository(Article::class);
        $articles = $articleRepository->findAll();

        // dd($articles);

        return $this->render('/article/index.html.twig', [
            'articles' => $articles
        ]);

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
    public function new(Request $request) {
        $article = new Article();
        $article->setTitle($request->request->get('title'));
        $article->setContent($request->request->get('content'));
        $article->setShortContent($request->request->get('short_content'));

        $em = $this->getDoctrine()->getManager();
        $em->persist($article);
        $em->flush();

        return $this->redirectToRoute('article_index');
        
    }

    /**
     * Afficher les résultats d'une recherche
     * 
     * @Route("/search/", name="article_search", methods={"GET"})
     */
    public function search(Request $request, ArticleRepository $articleRepository) 
    {
        $search= $request->query->get("search");
        $recherche = $articleRepository->findByString($search);

        // dd($recherche);
        return $this->render('/article/index.html.twig', [
            'articles' => $recherche
        ]);

    }

    /**
     * Modifier un article
     * 
     * @Route("/{article}/edit", name="article_edit", methods={"POST"})
     */
    public function edit(Article $article) {
        return $this->render('/article/create.html.twig', [
            "article" => $article
        ]);
    }

    /**
     * Traiter la modification d'un article
     * 
     * @Route("/{article}/edit", name="article_update", methods={"POST"})
     */
    public function update(Request $request, Article $article) {

        $article->setTitle($request->request->get('title'));
        $article->setContent($request->request->get('content'));
        $article->setShortContent($request->request->get('short_content'));

        $manager = $this->getDoctrine()->getManager();
        $manager->flush();

        return $this->redirectToRoute("article_index");

    }

    /**
     * Afficher un article
     * 
     * @Route("/{article}", name="article_show", requirements={"article"="\d+"}, methods={"GET"})
     */
    public function show(int $article) {
        $articleRepository = $this->getDoctrine()->getRepository(Article::class);
        $article = $articleRepository->find($article);

        return $this->render('/article/show.html.twig', compact('article'));

    }


}