import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Index = () => {
  const courses = [
    {
      id: 1,
      title: "Python для анализа данных",
      level: "Начинающий",
      duration: "8 недель",
      students: 1240,
      rating: 4.8,
      price: "24 900 ₽",
      tags: ["Python", "Data Science", "Pandas"]
    },
    {
      id: 2,
      title: "Fullstack JavaScript",
      level: "Средний",
      duration: "12 недель",
      students: 890,
      rating: 4.9,
      price: "34 900 ₽",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      title: "Machine Learning на практике",
      level: "Продвинутый",
      duration: "16 недель",
      students: 560,
      rating: 4.7,
      price: "44 900 ₽",
      tags: ["ML", "TensorFlow", "Python"]
    },
    {
      id: 4,
      title: "Blockchain разработка",
      level: "Средний",
      duration: "10 недель",
      students: 340,
      rating: 4.6,
      price: "39 900 ₽",
      tags: ["Solidity", "Web3", "Ethereum"]
    }
  ];

  const testimonials = [
    {
      name: "Анна Соколова",
      role: "Data Scientist в Яндекс",
      avatar: "AS",
      text: "Прошла курс по Machine Learning и через 3 месяца получила оффер в топовую компанию. Практические проекты в портфолио сыграли ключевую роль.",
      course: "Machine Learning"
    },
    {
      name: "Дмитрий Петров",
      role: "Frontend Developer",
      avatar: "ДП",
      text: "Гибкий график обучения позволил совмещать курс с основной работой. Преподаватели всегда на связи, код-ревью помогли вырасти как разработчику.",
      course: "Fullstack JavaScript"
    },
    {
      name: "Мария Ковалева",
      role: "Junior Data Analyst",
      avatar: "МК",
      text: "Сменила профессию с нуля. Курс дал не только технические навыки, но и помог собрать портфолио проектов для собеседований.",
      course: "Python для анализа данных"
    }
  ];

  const teachers = [
    {
      name: "Александр Иванов",
      role: "Lead Developer",
      company: "Google",
      experience: "15 лет",
      students: 3400,
      avatar: "АИ",
      bio: "Разработал 5 продуктов с аудиторией 10М+ пользователей"
    },
    {
      name: "Елена Смирнова",
      role: "ML Engineer",
      company: "Сбер",
      experience: "10 лет",
      students: 2800,
      avatar: "ЕС",
      bio: "Эксперт в NLP и компьютерном зрении, спикер конференций"
    },
    {
      name: "Игорь Морозов",
      role: "Tech Lead",
      company: "Тинькофф",
      experience: "12 лет",
      students: 2200,
      avatar: "ИМ",
      bio: "Создал архитектуру высоконагруженных финтех-систем"
    }
  ];

  const features = [
    {
      icon: "BookOpen",
      title: "Обновляемые курсы",
      description: "Материалы обновляются ежемесячно под актуальные тренды индустрии"
    },
    {
      icon: "Smartphone",
      title: "Учитесь в любом месте",
      description: "Мобильное приложение и адаптивная платформа для обучения на ходу"
    },
    {
      icon: "TrendingUp",
      title: "От теории к практике",
      description: "Каждый курс включает реальные проекты для вашего портфолио"
    },
    {
      icon: "Users",
      title: "Активное сообщество",
      description: "Форумы, чаты и вебинары для обмена опытом с коллегами"
    }
  ];

  const blogPosts = [
    {
      title: "10 трендов в IT на 2025 год",
      category: "Индустрия",
      readTime: "5 мин",
      date: "3 ноября 2024"
    },
    {
      title: "Как собрать портфолио junior разработчика",
      category: "Карьера",
      readTime: "7 мин",
      date: "1 ноября 2024"
    },
    {
      title: "Что должен знать ML-инженер в 2025",
      category: "Технологии",
      readTime: "6 мин",
      date: "30 октября 2024"
    }
  ];

  const stats = [
    { value: "97%", label: "Трудоустройства выпускников" },
    { value: "24/7", label: "Поддержка менторов" },
    { value: "150+", label: "Компаний-партнеров" },
    { value: "92%", label: "Завершают курс" }
  ];

  const webinars = [
    {
      title: "Карьера в AI: с чего начать в 2025",
      speaker: "Елена Смирнова",
      company: "Сбер",
      date: "12 ноября",
      time: "19:00 МСК",
      attendees: 234,
      tags: ["AI", "Карьера"]
    },
    {
      title: "Архитектура микросервисов: best practices",
      speaker: "Игорь Морозов",
      company: "Тинькофф",
      date: "15 ноября",
      time: "18:00 МСК",
      attendees: 189,
      tags: ["Backend", "Архитектура"]
    },
    {
      title: "Web3 и будущее интернета",
      speaker: "Александр Иванов",
      company: "Google",
      date: "18 ноября",
      time: "20:00 МСК",
      attendees: 312,
      tags: ["Blockchain", "Web3"]
    }
  ];

  const studentProjects = [
    {
      title: "AI-ассистент для медицины",
      student: "Анна Соколова",
      course: "Machine Learning",
      description: "Система диагностики заболеваний на основе медицинских снимков",
      tech: ["Python", "TensorFlow", "OpenCV"],
      result: "Оффер в Яндекс"
    },
    {
      title: "Платформа для фриланса",
      student: "Дмитрий Петров",
      course: "Fullstack JavaScript",
      description: "Маркетплейс с реал-тайм чатом и системой безопасных платежей",
      tech: ["React", "Node.js", "WebSocket"],
      result: "Запуск стартапа"
    },
    {
      title: "Аналитика продаж для e-commerce",
      student: "Мария Ковалева",
      course: "Python для анализа данных",
      description: "Дашборд с прогнозированием спроса и рекомендациями",
      tech: ["Python", "Pandas", "Plotly"],
      result: "Junior Data Analyst"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Code2" className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">DevLearn</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-sm font-medium hover:text-primary transition-colors">Курсы</a>
            <a href="#webinars" className="text-sm font-medium hover:text-primary transition-colors">Вебинары</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Проекты</a>
            <a href="#teachers" className="text-sm font-medium hover:text-primary transition-colors">Преподаватели</a>
            <Button variant="outline" size="sm">Войти</Button>
            <Button size="sm">Начать обучение</Button>
          </nav>
        </div>
      </header>

      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background"></div>
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Sparkles" className="h-3 w-3 mr-1" />
              Более 10 000 выпускников
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Освой IT-профессию с нуля до трудоустройства
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Практические курсы от экспертов из топовых компаний. Гибкий график, реальные проекты в портфолио и поддержка менторов 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                Выбрать курс
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base">
                <Icon name="PlayCircle" className="mr-2 h-4 w-4" />
                Смотреть демо
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Zap" className="h-3 w-3 mr-1" />
              Почему DevLearn
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Обучение, которое меняет жизнь</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали платформу для тех, кто ценит качество, гибкость и реальные результаты
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={feature.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="BookOpen" className="h-3 w-3 mr-1" />
              Актуальные курсы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные направления</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выбирайте курс по востребованной специальности и начните карьеру в IT
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary">{course.level}</Badge>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{course.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    {course.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" className="h-4 w-4" />
                      <span>{course.students} студентов</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button>
                      Подробнее
                      <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Смотреть все курсы
              <Icon name="Grid" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="teachers" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="GraduationCap" className="h-3 w-3 mr-1" />
              Преподаватели
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Учитесь у лучших</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Эксперты из топовых IT-компаний делятся актуальным опытом и практическими знаниями
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarFallback className="text-2xl bg-primary/10 text-primary">{teacher.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{teacher.name}</CardTitle>
                  <CardDescription>
                    <div className="font-semibold text-foreground mt-1">{teacher.role}</div>
                    <div className="text-primary">{teacher.company}</div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 min-h-[40px]">{teacher.bio}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-muted-foreground">Опыт</div>
                      <div className="font-semibold">{teacher.experience}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Студентов</div>
                      <div className="font-semibold">{teacher.students}+</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="MessageSquare" className="h-3 w-3 mr-1" />
              Отзывы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Истории успеха наших студентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Реальные результаты людей, которые изменили свою карьеру
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <Avatar>
                      <AvatarFallback className="bg-secondary/10 text-secondary">{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{testimonial.text}</p>
                  <Badge variant="outline" className="text-xs">
                    <Icon name="BookOpen" className="h-3 w-3 mr-1" />
                    {testimonial.course}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="webinars" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Video" className="h-3 w-3 mr-1" />
              Вебинары и мастер-классы
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Учитесь у экспертов индустрии</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Бесплатные онлайн-сессии с обсуждением трендов, технологий и карьерных возможностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Icon name="Calendar" className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold text-primary">{webinar.date}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">{webinar.time}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors mb-3">{webinar.title}</CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary/10 text-primary">
                        {webinar.speaker.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-sm">
                      <div className="font-semibold">{webinar.speaker}</div>
                      <div className="text-muted-foreground text-xs">{webinar.company}</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {webinar.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                  <CardDescription className="flex items-center gap-1">
                    <Icon name="Users" className="h-3 w-3" />
                    {webinar.attendees} записалось
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    <Icon name="Bell" className="mr-2 h-4 w-4" />
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Смотреть все вебинары
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Rocket" className="h-3 w-3 mr-1" />
              Проекты студентов
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Реальные результаты обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Практические проекты, которые помогли студентам начать карьеру в IT
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {studentProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="text-sm bg-secondary/10 text-secondary">
                        {project.student.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-sm">{project.student}</div>
                      <div className="text-xs text-muted-foreground">{project.course}</div>
                    </div>
                  </div>
                  <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-sm mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map(tech => (
                      <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Trophy" className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">{project.result}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg">
              <Icon name="Briefcase" className="mr-2 h-4 w-4" />
              Создать свой проект
            </Button>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="outline">
              <Icon name="Newspaper" className="h-3 w-3 mr-1" />
              Блог и статьи
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Полезное для вашего роста</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Актуальные статьи о трендах, карьере и технологиях в IT-индустрии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-2">
                    <Icon name="Calendar" className="h-3 w-3" />
                    {post.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg">
              Читать все статьи
              <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать обучение?</h2>
            <p className="text-lg mb-8 text-white/90">
              Выберите курс и получите первую неделю бесплатно. Без автоплатежей и скрытых условий.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-base">
                Выбрать курс
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="text-base border-white text-white hover:bg-white hover:text-primary">
                <Icon name="MessageCircle" className="mr-2 h-4 w-4" />
                Задать вопрос
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Code2" className="h-5 w-5 text-primary" />
                <span className="font-bold text-lg">DevLearn</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современная платформа для обучения IT-профессиям с нуля
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Курсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Machine Learning</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blockchain</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Условия</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2024 DevLearn. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;