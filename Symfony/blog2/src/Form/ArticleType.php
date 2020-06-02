<?php

namespace App\Form;

use App\Entity\Article;
use App\Entity\Category;
use App\Entity\Tag;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;

class ArticleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre de votre article',
                'attr' => [
                    'class' => 'form-control-sm form-red',
                    'placeholder' => 'Titre par défaut'
                ],
                'constraints' => [
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Your title should be at least {{ limit }} characters',
                        'max' => 255,
                        'maxMessage' => 'Your title should be maximum {{ limit }} characters',
                    ]),
                ]
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Contenu de votre article',
                'attr' => [
                    'placeholder' => 'Contenu par défaut'
                ]
            ])
            ->add('created_at', DateTimeType::class,  [
                'label' => 'Date de création',
                'widget' => 'single_text',
                'input_format' => 'datetime'
            ])
            ->add('short_content')
            ->add('category', EntityType::class, [
                'class' => Category::class, // Quelle classe est reliée au champ category
                'choice_label' => 'title', // Quel champ de Category afficher dans le select
            ])
            ->add('tags', EntityType::class, [
                'class' => Tag::class,
                'choice_label' => 'title',
                'multiple' => true
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Article::class,
        ]);
    }
}
