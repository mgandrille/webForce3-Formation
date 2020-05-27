<?php

namespace App\Entity;

class Articles {
    
    /**
     *  VARIABLES
     */
    
    /**
     * Nom de la table en BDD
     * 
     * @var string
     */
    public $tableName = "articles";

    /**
     * @var int
     */
    private $id;

    /**
     * @var string
     */
    private $articles;

    /**
     *  FONCTIONS GET ET SET
     */

    /**
     * @return int
     */
    public function getId() : int
    {
        return $this->id;
    }

    /**
     * @param int $id
     * @return self
     */
    public function setId(int $id) : self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return string
     */
    public function getArticles() : string
    {
        return $this->articles;
    }

        /**
     * @param int $articles
     * @return self
     */
    public function setArticles($articles) : self
    {
        $this->articles = $articles;
        return $this;
    }

}