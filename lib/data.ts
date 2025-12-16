import { InterviewData } from './types';

export const interviewData: InterviewData = {
  categories: [
    {
      id: 'java-core',
      title: 'Java Core',
      emoji: '☕',
      description: 'Основи, OOP, Streams, Функціональні інтерфейси',
      questions: [
        {
          question: 'Що таке ООП та його основні принципи?',
          answer: `ООП (Об'єктно-Орієнтоване Програмування) - парадигма програмування, заснована на концепції об'єктів.

**4 основні принципи ООП:**

- **Інкапсуляція** - приховування внутрішньої реалізації об'єкта через модифікатори доступу (\`private\`, \`protected\`, \`public\`). Дозволяє захистити дані від неконтрольованого доступу

- **Наслідування** - створення нових класів на основі існуючих з успадкуванням полів та методів. Підтримує повторне використання коду

- **Поліморфізм** - можливість об'єктів різних класів реагувати на один і той же виклик методу по-різному. Один інтерфейс - різні реалізації

- **Абстракція** - виділення головного і приховування деталей реалізації. Робота з об'єктами на концептуальному рівні`
        },
        {
          question: 'Різниця між abstract class та interface?',
          answer: `**Abstract Class:**
- Може мати конструктори
- Може містити поля зі станом
- Може мати методи з реалізацією
- Підтримує одиничне наслідування
- Використовується для спільної функціональності

**Interface:**
- Не має конструкторів
- Тільки константи (\`public static final\`)
- До Java 8 - тільки абстрактні методи
- Підтримує множинну імплементацію
- З Java 8: \`default\` та \`static\` методи
- З Java 9: \`private\` методи

**Коли використовувати:**
- Abstract class - коли є спільна реалізація
- Interface - для визначення контракту/поведінки`
        },
        {
          question: 'Що таке Stream API в Java?',
          answer: `Stream API - функціональний підхід для обробки колекцій даних, введений в Java 8.

**Основні переваги:**
- Декларативний стиль коду
- Ліниве виконання (lazy evaluation)
- Можливість паралельної обробки
- Зменшення boilerplate коду

**Приклад:**

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

List<Integer> result = numbers.stream()
    .filter(x -> x % 2 == 0)  // Фільтрація парних
    .map(x -> x * 2)           // Множення на 2
    .collect(Collectors.toList());
// Результат: [4, 8, 12]
\`\`\`

**Важливо:** Stream не модифікує вихідну колекцію, а створює нову`
        },
        {
          question: 'Назвіть основні проміжні операції Stream',
          answer: `Проміжні операції повертають новий Stream і виконуються ліниво.

**Основні операції:**

- **\`filter(Predicate)\`** - фільтрація елементів за умовою
- **\`map(Function)\`** - перетворення кожного елемента
- **\`flatMap(Function)\`** - розгортання вкладених структур
- **\`distinct()\`** - видалення дублікатів
- **\`sorted()\`** - сортування елементів
- **\`peek(Consumer)\`** - виконання дії без зміни stream (для debugging)
- **\`limit(long)\`** - обмеження кількості елементів
- **\`skip(long)\`** - пропуск перших n елементів

**Приклад з ланцюжком:**

\`\`\`java
stream.filter(x -> x > 0)
      .distinct()
      .sorted()
      .limit(10);
\`\`\``
        },
        {
          question: 'Назвіть термінальні операції Stream',
          answer: `Термінальні операції запускають обробку stream і повертають результат.

**Основні операції:**

- **\`collect(Collector)\`** - збір у колекцію (List, Set, Map)
- **\`forEach(Consumer)\`** - виконання дії для кожного елемента
- **\`reduce(BinaryOperator)\`** - редукція до одного значення
- **\`count()\`** - підрахунок елементів
- **\`anyMatch(Predicate)\`** - чи є хоча б один елемент
- **\`allMatch(Predicate)\`** - чи всі елементи відповідають умові
- **\`noneMatch(Predicate)\`** - чи жоден не відповідає
- **\`findFirst()\`** - знайти перший елемент
- **\`findAny()\`** - знайти будь-який елемент
- **\`min()/max(Comparator)\`** - мінімальний/максимальний елемент

**Після виклику термінальної операції stream закривається!**`
        },
        {
          question: 'Що таке функціональні інтерфейси?',
          answer: `Функціональний інтерфейс - інтерфейс з **одним абстрактним методом** (SAM - Single Abstract Method).

**Анотація:** \`@FunctionalInterface\` (опціонально, але рекомендовано)

**Основні вбудовані функціональні інтерфейси:**

| Інтерфейс | Метод | Опис |
|-----------|-------|------|
| \`Predicate<T>\` | \`boolean test(T t)\` | Перевірка умови |
| \`Function<T,R>\` | \`R apply(T t)\` | Перетворення T -> R |
| \`Consumer<T>\` | \`void accept(T t)\` | Споживання значення |
| \`Supplier<T>\` | \`T get()\` | Постачання значення |
| \`BiFunction<T,U,R>\` | \`R apply(T t, U u)\` | Два аргументи -> результат |
| \`UnaryOperator<T>\` | \`T apply(T t)\` | T -> T |
| \`BinaryOperator<T>\` | \`T apply(T t1, T t2)\` | (T, T) -> T |

**Використовуються для лямбда-виразів та method references**`
        },
        {
          question: 'Різниця між Collection та Collections?',
          answer: `**Collection (інтерфейс):**
- Батьківський інтерфейс для List, Set, Queue
- Визначає базові методи: \`add()\`, \`remove()\`, \`contains()\`, \`size()\`, \`isEmpty()\`
- Частина ієрархії колекцій

**Collections (утиліт-клас):**
- Клас з статичними методами для роботи з колекціями
- Основні методи:
  - \`sort()\` - сортування
  - \`reverse()\` - реверс
  - \`shuffle()\` - перемішування
  - \`binarySearch()\` - бінарний пошук
  - \`synchronizedList()\` - потокобезпечна обгортка
  - \`unmodifiableList()\` - незмінна обгортка

**Приклад:**

\`\`\`java
List<String> list = new ArrayList<>();
Collections.sort(list);
Collections.reverse(list);
\`\`\``
        },
        {
          question: 'ArrayList vs LinkedList?',
          answer: `**ArrayList:**
- Внутрішня структура: динамічний масив
- Доступ по індексу: O(1) - швидкий
- Вставка/видалення: O(n) - повільне (потрібно зсувати елементи)
- Пам'ять: компактне зберігання
- Використання: для частого читання

**LinkedList:**
- Внутрішня структура: двозв'язний список
- Доступ по індексу: O(n) - повільний
- Вставка/видалення: O(1) - швидке (на початку/кінці)
- Пам'ять: додаткові посилання для кожного вузла
- Використання: для частих модифікацій

**Висновок:** В 90% випадків краще використовувати ArrayList`
        },
        {
          question: 'HashMap vs HashTable vs ConcurrentHashMap?',
          answer: `**HashMap:**
- НЕ синхронізований (не потокобезпечний)
- Дозволяє \`null\` ключ та значення
- Швидкий у однопотоковому середовищі
- Додано в Java 1.2

**Hashtable:**
- Синхронізований (застарілий підхід)
- НЕ дозволяє \`null\` ключ/значення
- Повільний через синхронізацію всього об'єкта
- Legacy клас (не рекомендується)

**ConcurrentHashMap:**
- Потокобезпечний з сегментованою синхронізацією
- НЕ дозволяє \`null\` ключ/значення
- Висока продуктивність у багатопотоковому середовищі
- Блокує тільки сегмент, а не весь Map
- Додано в Java 1.5

**Рекомендація:** Використовуйте HashMap для однопотокового коду, ConcurrentHashMap для багатопотокового`
        },
        {
          question: 'Що таке checked і unchecked exceptions?',
          answer: `**Checked Exceptions:**
- Перевіряються на етапі компіляції
- Обов'язкова обробка через \`try-catch\` або \`throws\`
- Наслідуються від \`Exception\` (але не від \`RuntimeException\`)
- Приклади:
  - \`IOException\`
  - \`SQLException\`
  - \`ClassNotFoundException\`

**Unchecked Exceptions:**
- НЕ перевіряються компілятором
- Необов'язкова обробка
- Наслідуються від \`RuntimeException\`
- Приклади:
  - \`NullPointerException\`
  - \`ArrayIndexOutOfBoundsException\`
  - \`IllegalArgumentException\`
  - \`NumberFormatException\`

**Best Practice:** Використовуйте checked для відновлюваних помилок, unchecked для помилок програміста`
        }
      ]
    },
    {
      id: 'patterns',
      title: 'Design Patterns',
      emoji: '🏗️',
      description: 'GoF та AQA патерни',
      questions: [
        {
          question: 'Що таке паттерн Singleton?',
          answer: `Singleton - порождуючий паттерн, що гарантує існування лише одного екземпляра класу та надає глобальну точку доступу до нього.

**Ключові характеристики:**
- Приватний конструктор
- Статичне поле з екземпляром
- Статичний метод \`getInstance()\`
- Ліниве або жадібне створення екземпляра

**Реалізація (Thread-Safe):**

\`\`\`java
public class Singleton {
    private static volatile Singleton instance;

    private Singleton() {
        // Приватний конструктор
    }

    public static Singleton getInstance() {
        if (instance == null) {
            synchronized (Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}
\`\`\`

**Використання в AQA:**
- \`DriverManager\` - керування WebDriver
- \`ConfigReader\` - зчитування конфігурації
- \`DatabaseConnection\` - підключення до БД
- \`Logger\` - єдина точка логування

**Переваги:** Економія пам'яті, контрольований доступ
**Недоліки:** Важко тестувати, порушує Single Responsibility Principle`
        },
        {
          question: 'Що таке паттерн Factory?',
          answer: `Factory - порождуючий паттерн для створення об'єктів без вказівки конкретного класу.

**Види Factory паттернів:**

### 1. Factory Method
Визначає інтерфейс для створення об'єкта, але підкласи вирішують, який клас інстанціювати.

\`\`\`java
public abstract class DriverFactory {
    public abstract WebDriver createDriver();
}

public class ChromeDriverFactory extends DriverFactory {
    @Override
    public WebDriver createDriver() {
        return new ChromeDriver();
    }
}
\`\`\`

### 2. Abstract Factory
Створює сімейство пов'язаних об'єктів.

\`\`\`java
public interface UIFactory {
    Button createButton();
    TextField createTextField();
}
\`\`\`

**Використання в AQA:**
- **DriverFactory** - створення різних браузерів (Chrome, Firefox, Edge)
- **Page Factory** - ініціалізація Page Objects
- **Test Data Factory** - генерація тестових даних
- **Environment Factory** - конфігурація середовищ (dev, stage, prod)

**Переваги:**
- Слабке зв'язування коду
- Легке додавання нових типів
- Централізована логіка створення

**Недоліки:**
- Збільшення кількості класів
- Складність при великій кількості типів`
        },
        {
          question: 'Що таке паттерн Page Object Model (POM)?',
          answer: `Page Object Model - структурний паттерн для організації UI автоматизації, де кожна сторінка представлена окремим класом.

**Основні принципи:**
- Один Page Object = одна сторінка або компонент
- Локатори та методи взаємодії інкапсульовані в класі
- Тести використовують методи Page Object, а не локатори напряму
- Зміни в UI вимагають змін тільки в Page Object

**Структура Page Object:**

\`\`\`java
public class LoginPage {
    private WebDriver driver;

    // Локатори
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.xpath("//button[@type='submit']");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    // Методи взаємодії
    public LoginPage enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
        return this;
    }

    public LoginPage enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
        return this;
    }

    public HomePage clickLogin() {
        driver.findElement(loginButton).click();
        return new HomePage(driver);
    }
}
\`\`\`

**Використання в тесті:**

\`\`\`java
@Test
public void loginTest() {
    LoginPage loginPage = new LoginPage(driver);
    HomePage homePage = loginPage
        .enterUsername("testuser")
        .enterPassword("password123")
        .clickLogin();

    Assert.assertTrue(homePage.isLogoutButtonVisible());
}
\`\`\`

**Переваги:**
- Легка підтримка - зміни UI в одному місці
- Повторне використання коду
- Читабельність тестів
- Відокремлення тестової логіки від UI деталей

**Недоліки:**
- Багато класів при великій кількості сторінок
- Дублювання спільної логіки без BasePage`
        },
        {
          question: 'Різниця між Page Object та Page Factory?',
          answer: `**Page Object (класичний підхід):**
- Звичайний клас з полями \`WebElement\`
- Ініціалізація локаторів в конструкторі або методах
- Ручне знаходження елементів через \`driver.findElement()\`

\`\`\`java
public class LoginPage {
    private WebDriver driver;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    public void enterUsername(String username) {
        driver.findElement(By.id("username")).sendKeys(username);
    }
}
\`\`\`

**Page Factory (Selenium підхід):**
- Використовує анотації \`@FindBy\` для локаторів
- Автоматична ініціалізація через \`PageFactory.initElements()\`
- Lazy initialization - елементи знаходяться тільки при використанні

\`\`\`java
public class LoginPage {
    private WebDriver driver;

    @FindBy(id = "username")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement loginButton;

    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void enterUsername(String username) {
        usernameField.sendKeys(username);
    }
}
\`\`\`

**Порівняння:**

| Характеристика | Page Object | Page Factory |
|----------------|-------------|--------------|
| Анотації | Немає | \`@FindBy\` |
| Ініціалізація | Ручна | Автоматична |
| Lazy loading | Немає | Є |
| Читабельність | Добра | Відмінна |
| Гнучкість | Висока | Обмежена |

**Рекомендація:** Page Factory зручніший для простих сторінок, класичний Page Object - для складної динамічної логіки`
        },
        {
          question: 'Що таке Builder паттерн?',
          answer: `Builder - порождуючий паттерн для покрокового створення складних об'єктів.

**Проблема:** Конструктор з багатьма параметрами важко читати та використовувати.

**Погано:**

\`\`\`java
User user = new User("John", "Doe", 30, "john@test.com",
                      "1234567890", "New York", "USA", "male");
\`\`\`

**Добре з Builder:**

\`\`\`java
User user = User.builder()
    .firstName("John")
    .lastName("Doe")
    .age(30)
    .email("john@test.com")
    .phone("1234567890")
    .city("New York")
    .country("USA")
    .gender("male")
    .build();
\`\`\`

**Реалізація:**

\`\`\`java
public class User {
    private String firstName;
    private String lastName;
    private int age;
    private String email;

    private User(Builder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.age = builder.age;
        this.email = builder.email;
    }

    public static Builder builder() {
        return new Builder();
    }

    public static class Builder {
        private String firstName;
        private String lastName;
        private int age;
        private String email;

        public Builder firstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public Builder lastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public Builder age(int age) {
            this.age = age;
            return this;
        }

        public Builder email(String email) {
            this.email = email;
            return this;
        }

        public User build() {
            return new User(this);
        }
    }
}
\`\`\`

**Використання в AQA:**
- Створення складних тестових даних
- Конфігурація WebDriver з багатьма опціями
- Побудова RequestSpecification в RestAssured
- Генерація тестових об'єктів з опціональними полями

**Переваги:**
- Читабельний код
- Опціональні параметри
- Immutable об'єкти
- Валідація перед створенням

**Недоліки:**
- Багато boilerplate коду (можна використати Lombok \`@Builder\`)`
        },
        {
          question: 'Що таке Strategy паттерн?',
          answer: `Strategy - поведінковий паттерн, що визначає сімейство алгоритмів, інкапсулює кожен і робить їх взаємозамінними.

**Приклад:**

\`\`\`java
// Інтерфейс стратегії
public interface WaitStrategy {
    void waitForElement(WebDriver driver, By locator);
}

// Конкретні стратегії
public class ExplicitWaitStrategy implements WaitStrategy {
    @Override
    public void waitForElement(WebDriver driver, By locator) {
        new WebDriverWait(driver, Duration.ofSeconds(10))
            .until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
}

public class FluentWaitStrategy implements WaitStrategy {
    @Override
    public void waitForElement(WebDriver driver, By locator) {
        new FluentWait<>(driver)
            .withTimeout(Duration.ofSeconds(10))
            .pollingEvery(Duration.ofMillis(500))
            .ignoring(NoSuchElementException.class)
            .until(ExpectedConditions.visibilityOfElementLocated(locator));
    }
}

// Контекст
public class ElementFinder {
    private WaitStrategy waitStrategy;

    public void setWaitStrategy(WaitStrategy strategy) {
        this.waitStrategy = strategy;
    }

    public WebElement findElement(WebDriver driver, By locator) {
        waitStrategy.waitForElement(driver, locator);
        return driver.findElement(locator);
    }
}
\`\`\`

**Використання в AQA:**

- **Wait Strategies** - різні стратегії очікування (Explicit, Fluent, Implicit)
- **Test Data Strategies** - різні джерела даних (JSON, XML, Database, API)
- **Browser Strategies** - різні налаштування браузерів
- **Logging Strategies** - різні рівні та формати логування
- **Retry Strategies** - різні підходи до повторних спроб

**Переваги:**
- Легко додавати нові стратегії
- Зміна поведінки в runtime
- Відокремлення алгоритму від контексту
- Тестованість окремих стратегій

**Недоліки:**
- Збільшення кількості класів
- Клієнт повинен знати про різні стратегії`
        },
        {
          question: 'Що таке Observer паттерн?',
          answer: `Observer (Спостерігач) - поведінковий паттерн, де один об'єкт (Subject) сповіщає спостерігачів (Observers) про зміни свого стану.

**Структура:**

\`\`\`java
// Інтерфейс спостерігача
public interface TestListener {
    void onTestStart(String testName);
    void onTestSuccess(String testName);
    void onTestFailure(String testName, Throwable error);
}

// Конкретні спостерігачі
public class LoggingListener implements TestListener {
    @Override
    public void onTestStart(String testName) {
        System.out.println("Starting test: " + testName);
    }

    @Override
    public void onTestSuccess(String testName) {
        System.out.println("Test passed: " + testName);
    }

    @Override
    public void onTestFailure(String testName, Throwable error) {
        System.out.println("Test failed: " + testName);
        error.printStackTrace();
    }
}

public class ScreenshotListener implements TestListener {
    @Override
    public void onTestFailure(String testName, Throwable error) {
        takeScreenshot(testName);
    }

    // інші методи...
}
\`\`\`

**Використання в AQA:**

### TestNG Listeners
\`\`\`java
public class CustomListener implements ITestListener {
    @Override
    public void onTestStart(ITestResult result) {
        // Логіка при старті тесту
    }

    @Override
    public void onTestFailure(ITestResult result) {
        // Screenshot при падінні
        takeScreenshot(result.getName());
    }
}
\`\`\`

**Типи Listeners в TestNG:**
- \`ITestListener\` - події тестів
- \`ISuiteListener\` - події тестових сьютів
- \`IInvokedMethodListener\` - події методів
- \`IReporter\` - генерація звітів

**Реальні приклади:**
- Логування виконання тестів
- Автоматичні screenshot при failed тестах
- Відправка нотифікацій (Slack, Email)
- Збір метрик та статистики
- Запис video при помилках

**Переваги:**
- Слабке зв'язування
- Динамічне додавання/видалення спостерігачів
- Підтримка broadcast комунікації

**Недоліки:**
- Складність при великій кількості спостерігачів
- Непередбачуваний порядок сповіщень`
        },
        {
          question: 'Що таке Decorator паттерн?',
          answer: `Decorator - структурний паттерн, що динамічно додає об'єкту нову функціональність, обгортаючи його в об'єкт-декоратор.

**Приклад з WebDriver:**

\`\`\`java
// Базовий інтерфейс
public interface WebDriver {
    void get(String url);
    WebElement findElement(By locator);
}

// Декоратор з логуванням
public class LoggingWebDriver implements WebDriver {
    private final WebDriver driver;

    public LoggingWebDriver(WebDriver driver) {
        this.driver = driver;
    }

    @Override
    public void get(String url) {
        System.out.println("Navigating to: " + url);
        driver.get(url);
        System.out.println("Navigation completed");
    }

    @Override
    public WebElement findElement(By locator) {
        System.out.println("Finding element: " + locator);
        return driver.findElement(locator);
    }
}

// Декоратор з retry логікою
public class RetryWebDriver implements WebDriver {
    private final WebDriver driver;
    private final int maxRetries = 3;

    public RetryWebDriver(WebDriver driver) {
        this.driver = driver;
    }

    @Override
    public WebElement findElement(By locator) {
        for (int i = 0; i < maxRetries; i++) {
            try {
                return driver.findElement(locator);
            } catch (NoSuchElementException e) {
                if (i == maxRetries - 1) throw e;
                Thread.sleep(1000);
            }
        }
        return null;
    }
}
\`\`\`

**Використання:**

\`\`\`java
WebDriver driver = new ChromeDriver();
driver = new LoggingWebDriver(driver);
driver = new RetryWebDriver(driver);
driver = new ScreenshotOnErrorWebDriver(driver);

// Тепер driver має всю додаткову функціональність
driver.get("https://example.com");
\`\`\`

**Використання в AQA:**
- **Логування** всіх WebDriver команд
- **Retry механізм** для нестабільних операцій
- **Screenshots** при помилках
- **Metrics збір** для performance аналізу
- **Highlighting** елементів перед взаємодією

**Переваги:**
- Гнучке додавання функціональності
- Альтернатива наслідуванню
- Множинне декорування
- Single Responsibility Principle

**Недоліки:**
- Багато дрібних класів
- Складність конфігурації декораторів`
        },
        {
          question: 'Які ще GoF патерни використовуються в AQA?',
          answer: `**Часто використовувані GoF патерни в автоматизації:**

### 1. Singleton
- **DriverManager** - єдиний екземпляр для керування WebDriver
- **ConfigReader** - централізоване зчитування конфігурації
- **Logger** - єдина точка логування

### 2. Factory / Abstract Factory
- **BrowserFactory** - створення різних типів браузерів
- **TestDataFactory** - генерація тестових даних
- **EnvironmentFactory** - конфігурація середовищ

### 3. Builder
- **Test Data Builders** - складні об'єкти з багатьма полями
- **Request Builders** в RestAssured
- **WebDriver Options** - конфігурація браузера

### 4. Chain of Responsibility
- **Event Handlers** - ланцюжок обробки подій
- **Validation Chain** - послідовна валідація
- **Logging Chain** - різні рівні логування

### 5. Command
- **WebDriver Commands** - інкапсуляція дій як команд
- **Test Steps** - окремі кроки тесту як команди
- **Undo/Redo** функціональність

### 6. Proxy
- **RemoteWebDriver** - проксі для віддаленого браузера
- **Lazy Loading** - відкладене завантаження елементів
- **EventFiringWebDriver** - перехоплення подій

### 7. Template Method
\`\`\`java
public abstract class BaseTest {
    @BeforeMethod
    public void setUp() {
        initializeDriver();    // Шаблонний метод
        setConfiguration();    // Шаблонний метод
        openApplication();     // Може бути перевизначений
    }

    protected abstract void openApplication();

    @AfterMethod
    public void tearDown() {
        takeScreenshot();
        closeDriver();
    }
}
\`\`\`

### 8. Adapter
- **Адаптація старих API** до нових інтерфейсів
- **WebDriver адаптери** для різних браузерів
- **Test Framework адаптери**

**Кожен паттерн вирішує конкретну проблему в автоматизації тестування!**`
        }
      ]
    },
    {
      id: 'framework',
      title: 'Framework Architecture',
      emoji: '🏛️',
      description: 'Архітектура та компоненти фреймворків',
      questions: [
        {
          question: 'Які основні компоненти тестового фреймворку?',
          answer: `Тестовий фреймворк складається з кількох ключових компонентів, які забезпечують структурованість та підтримуваність автоматизації.

**Основні компоненти:**

1. **Test Runner** - TestNG або JUnit для виконання тестів
2. **WebDriver Manager** - керування браузерними драйверами
3. **Page Objects** - інкапсуляція UI елементів та логіки взаємодії
4. **Utilities** - допоміжні класи (helpers, utils)
5. **Test Data** - управління тестовими даними (Excel/JSON/DB)
6. **Configuration** - конфігураційні файли (properties/yaml)
7. **Reporting** - система звітності (Allure/ExtentReports)
8. **Logging** - журналювання подій (Log4j)
9. **CI/CD Integration** - інтеграція з Jenkins/GitLab CI

**Приклад структури проєкту:**

\`\`\`
src/
├── main/java/
│   ├── pages/        # Page Objects
│   ├── utils/        # Helpers
│   ├── config/       # Configuration
│   └── managers/     # Driver/Data Managers
└── test/
    ├── java/tests/   # Test classes
    └── resources/    # Test data, configs
\`\`\`

Кожен компонент має свою чітко визначену відповідальність, що робить фреймворк модульним та легким для підтримки.`
        },
        {
          question: 'Розкажіть про структуру вашого фреймворку',
          answer: `Типова структура професійного тестового фреймворку організована за принципом розділення відповідальностей.

**Структура директорій:**

\`\`\`
project-root/
├── src/main/java/
│   ├── pages/              # Page Object класи
│   │   ├── LoginPage.java
│   │   └── HomePage.java
│   ├── utils/              # Utility класи
│   │   ├── WaitHelper.java
│   │   └── ScreenshotUtil.java
│   ├── config/             # Configuration
│   │   └── ConfigReader.java
│   └── managers/           # Manager класи
│       ├── DriverManager.java
│       └── TestDataManager.java
├── src/test/java/
│   ├── tests/              # Test класи
│   │   ├── LoginTests.java
│   │   └── CheckoutTests.java
│   └── base/               # Base класи
│       └── BaseTest.java
├── src/test/resources/
│   ├── testdata/           # Test data files
│   │   ├── users.json
│   │   └── products.xlsx
│   ├── config.properties   # Configuration
│   └── log4j2.xml          # Logging config
├── pom.xml                 # Maven dependencies
└── testng.xml              # TestNG suite config
\`\`\`

**Dependencies (pom.xml):**

\`\`\`xml
<dependencies>
    <dependency>
        <groupId>org.seleniumhq.selenium</groupId>
        <artifactId>selenium-java</artifactId>
    </dependency>
    <dependency>
        <groupId>org.testng</groupId>
        <artifactId>testng</artifactId>
    </dependency>
    <dependency>
        <groupId>io.qameta.allure</groupId>
        <artifactId>allure-testng</artifactId>
    </dependency>
</dependencies>
\`\`\`

Така структура забезпечує чітке розділення коду, легку навігацію та масштабованість проєкту.`
        },
        {
          question: 'Що таке BasePage і BaseTest?',
          answer: `**BasePage** та **BaseTest** - це фундаментальні базові класи, які забезпечують повторне використання коду та стандартизацію фреймворку.

### BasePage
Абстрактний клас з загальними методами для всіх Page Objects.

\`\`\`java
public abstract class BasePage {
    protected WebDriver driver;
    protected WebDriverWait wait;

    public BasePage(WebDriver driver) {
        this.driver = driver;
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(10));
    }

    protected void clickElement(By locator) {
        wait.until(ExpectedConditions.elementToBeClickable(locator))
            .click();
    }

    protected void enterText(By locator, String text) {
        WebElement element = wait.until(
            ExpectedConditions.visibilityOfElementLocated(locator));
        element.clear();
        element.sendKeys(text);
    }

    protected String getElementText(By locator) {
        return wait.until(ExpectedConditions.visibilityOfElementLocated(locator))
                   .getText();
    }

    protected boolean isElementVisible(By locator) {
        try {
            wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
            return true;
        } catch (TimeoutException e) {
            return false;
        }
    }
}
\`\`\`

### BaseTest
Базовий клас для тестів з setup і teardown логікою.

\`\`\`java
public class BaseTest {
    protected WebDriver driver;

    @BeforeMethod
    public void setUp() {
        driver = DriverManager.initDriver("chrome");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));
        driver.get(ConfigReader.getProperty("app.url"));
    }

    @AfterMethod
    public void tearDown(ITestResult result) {
        if (result.getStatus() == ITestResult.FAILURE) {
            ScreenshotUtil.takeScreenshot(driver, result.getName());
        }
        DriverManager.quitDriver();
    }
}
\`\`\`

**Переваги:**
- Усі Page Objects наслідуються від BasePage
- Усі тести наслідуються від BaseTest
- Централізована логіка для всього фреймворку
- Легке внесення змін в одному місці`
        },
        {
          question: 'Як організоване керування WebDriver?',
          answer: `Керування WebDriver організовується через **DriverManager** клас з використанням патерну Singleton та ThreadLocal для підтримки паралельного виконання.

**Реалізація DriverManager:**

\`\`\`java
public class DriverManager {
    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

    public static WebDriver initDriver(String browser) {
        if (driver.get() == null) {
            switch (browser.toLowerCase()) {
                case "chrome":
                    WebDriverManager.chromedriver().setup();
                    ChromeOptions chromeOptions = new ChromeOptions();
                    if (ConfigReader.getProperty("headless").equals("true")) {
                        chromeOptions.addArguments("--headless");
                    }
                    chromeOptions.addArguments("--disable-notifications");
                    driver.set(new ChromeDriver(chromeOptions));
                    break;

                case "firefox":
                    WebDriverManager.firefoxdriver().setup();
                    driver.set(new FirefoxDriver());
                    break;

                case "edge":
                    WebDriverManager.edgedriver().setup();
                    driver.set(new EdgeDriver());
                    break;

                default:
                    throw new IllegalArgumentException("Browser not supported: " + browser);
            }
        }
        return driver.get();
    }

    public static WebDriver getDriver() {
        return driver.get();
    }

    public static void quitDriver() {
        if (driver.get() != null) {
            driver.get().quit();
            driver.remove();
        }
    }
}
\`\`\`

**Ключові особливості:**

- **ThreadLocal** - кожен потік має свій екземпляр WebDriver для паралельного виконання
- **WebDriverManager** бібліотека - автоматичне завантаження драйверів (chromedriver, geckodriver)
- **Factory pattern** - підтримка різних браузерів через switch/case
- **Configuration** - налаштування через properties файл (browser.type, headless, timeout)
- **Centralized control** - єдина точка створення та закриття драйверів

**config.properties:**

\`\`\`properties
browser.type=chrome
headless=false
timeout.implicit=10
timeout.explicit=15
\`\`\``
        },
        {
          question: 'Як організовані тестові дані?',
          answer: `Тестові дані організовані через різні зовнішні джерела та паттерни, що забезпечує гнучкість та підтримуваність.

**Підходи до організації тестових даних:**

### 1. JSON файли

\`\`\`json
{
  "users": [
    {
      "username": "testuser1",
      "password": "Pass123!",
      "email": "test1@example.com",
      "role": "admin"
    },
    {
      "username": "testuser2",
      "password": "Pass456!",
      "email": "test2@example.com",
      "role": "user"
    }
  ]
}
\`\`\`

**Читання JSON:**

\`\`\`java
public class JsonDataReader {
    public static List<User> readUsers() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        InputStream is = JsonDataReader.class
            .getResourceAsStream("/testdata/users.json");
        return mapper.readValue(is,
            new TypeReference<List<User>>() {});
    }
}
\`\`\`

### 2. Excel файли (Apache POI)

\`\`\`java
public class ExcelReader {
    public static Object[][] getTestData(String sheetName) {
        Workbook workbook = WorkbookFactory.create(new File("testdata.xlsx"));
        Sheet sheet = workbook.getSheet(sheetName);
        // Зчитування даних...
        return data;
    }
}
\`\`\`

### 3. TestNG DataProvider

\`\`\`java
@DataProvider(name = "loginData")
public Object[][] getLoginData() {
    return new Object[][] {
        {"admin", "admin123", true},
        {"user", "user123", true},
        {"invalid", "wrong", false}
    };
}

@Test(dataProvider = "loginData")
public void loginTest(String username, String password, boolean expected) {
    // Test logic
}
\`\`\`

### 4. Test Data Factory/Builder

\`\`\`java
public class UserFactory {
    public static User createAdminUser() {
        return User.builder()
            .username("admin")
            .password("Admin123!")
            .role(Role.ADMIN)
            .build();
    }
}
\`\`\`

### 5. Faker Library для випадкових даних

\`\`\`java
Faker faker = new Faker();
String firstName = faker.name().firstName();
String email = faker.internet().emailAddress();
String phone = faker.phoneNumber().cellPhone();
\`\`\`

**Структура:**

\`\`\`
src/test/resources/testdata/
├── users.json
├── products.json
├── testdata.xlsx
└── config.properties
\`\`\`

Такий підхід дозволяє легко змінювати тестові дані без модифікації коду тестів.`
        },
        {
          question: 'Які підходи до організації локаторів?',
          answer: `Існує кілька підходів до організації локаторів, кожен з яких має свої переваги та використовується в різних сценаріях.

**Основні підходи:**

### 1. В Page Object класах (найпопулярніший)

\`\`\`java
public class LoginPage {
    // Локатори як приватні константи
    private final By USERNAME_FIELD = By.id("username");
    private final By PASSWORD_FIELD = By.id("password");
    private final By LOGIN_BUTTON = By.xpath("//button[@type='submit']");
    private final By ERROR_MESSAGE = By.cssSelector(".error-message");

    public void login(String username, String password) {
        driver.findElement(USERNAME_FIELD).sendKeys(username);
        driver.findElement(PASSWORD_FIELD).sendKeys(password);
        driver.findElement(LOGIN_BUTTON).click();
    }
}
\`\`\`

### 2. Окремі файли properties

**locators.properties:**

\`\`\`properties
login.username=id=username
login.password=id=password
login.button=xpath=//button[@type='submit']
\`\`\`

\`\`\`java
public class LocatorReader {
    private static Properties locators = new Properties();

    public static By getLocator(String key) {
        String[] parts = locators.getProperty(key).split("=", 2);
        String type = parts[0];
        String value = parts[1];

        switch (type) {
            case "id": return By.id(value);
            case "xpath": return By.xpath(value);
            case "css": return By.cssSelector(value);
            default: throw new IllegalArgumentException("Unknown locator type");
        }
    }
}
\`\`\`

### 3. JSON/YAML файли

**locators.json:**

\`\`\`json
{
  "LoginPage": {
    "usernameField": {
      "type": "id",
      "value": "username"
    },
    "loginButton": {
      "type": "xpath",
      "value": "//button[@type='submit']"
    }
  }
}
\`\`\`

### 4. Enum класи

\`\`\`java
public enum LoginPageLocators {
    USERNAME_FIELD(By.id("username")),
    PASSWORD_FIELD(By.id("password")),
    LOGIN_BUTTON(By.xpath("//button[@type='submit']"));

    private final By locator;

    LoginPageLocators(By locator) {
        this.locator = locator;
    }

    public By get() {
        return locator;
    }
}
\`\`\`

### 5. @FindBy анотації (Page Factory)

\`\`\`java
public class LoginPage {
    @FindBy(id = "username")
    private WebElement usernameField;

    @FindBy(id = "password")
    private WebElement passwordField;

    @FindBy(xpath = "//button[@type='submit']")
    private WebElement loginButton;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
    }
}
\`\`\`

**Best Practices:**
- ✅ Зберігати локатори в Page Object класах як приватні константи (найпопулярніший)
- ✅ Використовувати зрозумілі назви (USERNAME_FIELD замість FIELD1)
- ✅ Віддавати перевагу ID та CSS селекторам над XPath
- ✅ Групувати пов'язані локатори разом
- ❌ Уникати жорстко закодованих локаторів в тестах`
        },
        {
          question: 'Як реалізовано reporting?',
          answer: `Система звітності - критичний компонент фреймворку, що надає детальну інформацію про виконання тестів.

**Основні інструменти:**

### 1. Allure Reports

**Підключення:**

\`\`\`xml
<dependency>
    <groupId>io.qameta.allure</groupId>
    <artifactId>allure-testng</artifactId>
    <version>2.24.0</version>
</dependency>
\`\`\`

**Використання в тестах:**

\`\`\`java
@Epic("E-commerce")
@Feature("User Authentication")
public class LoginTests extends BaseTest {

    @Test
    @Description("Verify successful login with valid credentials")
    @Severity(SeverityLevel.CRITICAL)
    @Story("Login functionality")
    public void successfulLoginTest() {
        loginSteps.openLoginPage();
        loginSteps.enterCredentials("user", "pass");
        loginSteps.clickLoginButton();
        loginSteps.verifyUserLoggedIn();
    }

    @Step("Open login page")
    public void openLoginPage() {
        driver.get("https://example.com/login");
        Allure.addAttachment("Page URL", "https://example.com/login");
    }

    @Step("Enter username: {username} and password")
    public void enterCredentials(String username, String password) {
        loginPage.enterUsername(username);
        loginPage.enterPassword(password);
    }

    @Attachment(value = "Screenshot on failure", type = "image/png")
    public byte[] takeScreenshot() {
        return ((TakesScreenshot) driver)
            .getScreenshotAs(OutputType.BYTES);
    }
}
\`\`\`

**Генерація звіту:**

\`\`\`bash
mvn clean test
mvn allure:serve
\`\`\`

### 2. ExtentReports

\`\`\`java
public class ExtentManager {
    private static ExtentReports extent;
    private static ExtentTest test;

    public static void initReports() {
        extent = new ExtentReports();
        ExtentSparkReporter spark = new ExtentSparkReporter("reports/extent.html");
        extent.attachReporter(spark);
    }

    public static void createTest(String testName) {
        test = extent.createTest(testName);
    }

    public static void log(Status status, String message) {
        test.log(status, message);
    }

    public static void attachScreenshot(String path) {
        test.addScreenCaptureFromPath(path);
    }

    public static void flush() {
        extent.flush();
    }
}
\`\`\`

### 3. TestNG вбудовані звіти

**testng.xml:**

\`\`\`xml
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Test Suite">
    <listeners>
        <listener class-name="com.example.listeners.TestListener"/>
    </listeners>
    <test name="Regression Tests">
        <classes>
            <class name="com.example.tests.LoginTests"/>
            <class name="com.example.tests.CheckoutTests"/>
        </classes>
    </test>
</suite>
\`\`\`

### 4. Custom TestListener

\`\`\`java
public class TestListener implements ITestListener {

    @Override
    public void onTestStart(ITestResult result) {
        ExtentManager.createTest(result.getMethod().getMethodName());
    }

    @Override
    public void onTestSuccess(ITestResult result) {
        ExtentManager.log(Status.PASS, "Test passed");
    }

    @Override
    public void onTestFailure(ITestResult result) {
        ExtentManager.log(Status.FAIL, "Test failed: " + result.getThrowable());

        // Screenshot при падінні
        WebDriver driver = ((BaseTest) result.getInstance()).driver;
        String screenshotPath = ScreenshotUtil.takeScreenshot(driver, result.getName());
        ExtentManager.attachScreenshot(screenshotPath);

        // Allure attachment
        Allure.addAttachment("Failed Screenshot",
            new ByteArrayInputStream(
                ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES)
            )
        );
    }

    @Override
    public void onFinish(ITestContext context) {
        ExtentManager.flush();
    }
}
\`\`\`

**Компоненти reporting системи:**
- 📊 HTML звіти з детальною інформацією
- 📸 Автоматичні screenshots при помилках
- 📝 Логування кроків тесту
- 📈 Статистика виконання (pass/fail rate)
- 🔍 Категоризація тестів (Smoke, Regression, etc.)
- 📎 Прикріплення файлів (logs, videos, har files)`
        },
        {
          question: 'Як організоване паралельне виконання тестів?',
          answer: `Паралельне виконання тестів значно прискорює тестування та оптимізує використання ресурсів.

**Підходи до паралельного виконання:**

### 1. TestNG Parallel Execution

**testng.xml:**

\`\`\`xml
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="Parallel Test Suite" parallel="methods" thread-count="5">
    <test name="Login Tests">
        <classes>
            <class name="com.example.tests.LoginTests"/>
            <class name="com.example.tests.RegistrationTests"/>
        </classes>
    </test>
</suite>
\`\`\`

**Опції parallel:**
- \`parallel="methods"\` - кожен test method в окремому потоці
- \`parallel="classes"\` - кожен test class в окремому потоці
- \`parallel="tests"\` - кожен <test> блок в окремому потоці
- \`parallel="instances"\` - кожен екземпляр класу окремо

### 2. ThreadLocal WebDriver

**Критично важлива реалізація:**

\`\`\`java
public class DriverManager {
    // ThreadLocal гарантує окремий driver для кожного потоку
    private static ThreadLocal<WebDriver> driver = new ThreadLocal<>();

    public static WebDriver getDriver() {
        if (driver.get() == null) {
            driver.set(createDriver());
        }
        return driver.get();
    }

    private static WebDriver createDriver() {
        String browser = ConfigReader.getProperty("browser");
        WebDriver webDriver;

        switch (browser) {
            case "chrome":
                WebDriverManager.chromedriver().setup();
                webDriver = new ChromeDriver();
                break;
            case "firefox":
                WebDriverManager.firefoxdriver().setup();
                webDriver = new FirefoxDriver();
                break;
            default:
                throw new RuntimeException("Browser not supported");
        }

        webDriver.manage().window().maximize();
        webDriver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        return webDriver;
    }

    public static void quitDriver() {
        if (driver.get() != null) {
            driver.get().quit();
            driver.remove(); // Важливо видалити з ThreadLocal
        }
    }
}
\`\`\`

### 3. Selenium Grid

**Docker Compose для Grid:**

\`\`\`yaml
version: '3'
services:
  selenium-hub:
    image: selenium/hub:latest
    ports:
      - "4444:4444"

  chrome-node:
    image: selenium/node-chrome:latest
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
      - SE_EVENT_BUS_PUBLISH_PORT=4442
      - SE_EVENT_BUS_SUBSCRIBE_PORT=4443
    ports:
      - "5900:5900"

  firefox-node:
    image: selenium/node-firefox:latest
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub
\`\`\`

**Підключення до Grid:**

\`\`\`java
public static WebDriver createRemoteDriver() {
    ChromeOptions options = new ChromeOptions();
    try {
        return new RemoteWebDriver(
            new URL("http://localhost:4444/wd/hub"),
            options
        );
    } catch (MalformedURLException e) {
        throw new RuntimeException(e);
    }
}
\`\`\`

### 4. Maven Surefire Plugin

**pom.xml:**

\`\`\`xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>3.0.0</version>
    <configuration>
        <parallel>methods</parallel>
        <threadCount>5</threadCount>
        <forkCount>2</forkCount>
        <reuseForks>true</reuseForks>
        <suiteXmlFiles>
            <suiteXmlFile>testng.xml</suiteXmlFile>
        </suiteXmlFiles>
    </configuration>
</plugin>
\`\`\`

### 5. Cucumber Parallel Execution

**Maven командa:**

\`\`\`bash
mvn test -Dparallel=methods -DthreadCount=5
\`\`\`

**Best Practices:**
- ✅ Використовувати ThreadLocal для ізоляції WebDriver
- ✅ Незалежні тести (не мають спільних залежностей)
- ✅ Окремі тестові дані для кожного потоку
- ✅ Thread-safe utilities та helpers
- ✅ Proper cleanup в @AfterMethod
- ❌ Уникати shared state між тестами
- ❌ Не використовувати static WebDriver без ThreadLocal

**Переваги:**
- ⚡ Швидкість виконання (n разів швидше)
- 📊 Ефективне використання ресурсів
- 🎯 Parallel execution на Grid розподіляє навантаження`
        },
        {
          question: 'Як організована CI/CD інтеграція?',
          answer: `CI/CD інтеграція автоматизує процес запуску тестів та генерації звітів при кожній зміні коду.

**Основні підходи:**

### 1. Jenkins Pipeline

**Jenkinsfile:**

\`\`\`groovy
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/username/project.git'
            }
        }

        stage('Build') {
            steps {
                sh 'mvn clean compile'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'mvn test -Dsurefire.suiteXmlFiles=testng.xml'
            }
        }

        stage('Generate Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'target/allure-results']]
                ])
            }
        }

        stage('Publish Results') {
            steps {
                junit '**/target/surefire-reports/*.xml'
                publishHTML([
                    reportDir: 'target/extent-reports',
                    reportFiles: 'extent.html',
                    reportName: 'Extent Report'
                ])
            }
        }
    }

    post {
        failure {
            emailext(
                subject: "Build Failed: \${env.JOB_NAME} - \${env.BUILD_NUMBER}",
                body: "Check console output at \${env.BUILD_URL}",
                to: 'team@example.com'
            )
        }
        success {
            slackSend(
                color: 'good',
                message: "Tests passed! Build: \${env.BUILD_NUMBER}"
            )
        }
    }
}
\`\`\`

**Jenkins Configuration:**
- Trigger: Poll SCM (H/15 * * * *) або Webhook
- Email notifications при failed builds
- Slack integration для команди
- Allure Report plugin для візуалізації

### 2. GitLab CI/CD

**.gitlab-ci.yml:**

\`\`\`yaml
image: maven:3.8.6-openjdk-11

stages:
  - build
  - test
  - report

variables:
  MAVEN_OPTS: "-Dmaven.repo.local=.m2/repository"

cache:
  paths:
    - .m2/repository/

build:
  stage: build
  script:
    - mvn clean compile
  artifacts:
    paths:
      - target/

test:
  stage: test
  services:
    - name: selenium/standalone-chrome:latest
      alias: selenium
  variables:
    SELENIUM_HOST: selenium
    SELENIUM_PORT: 4444
  script:
    - mvn test -Dselenium.grid.url=http://selenium:4444/wd/hub
  artifacts:
    when: always
    paths:
      - target/surefire-reports/
      - target/allure-results/
    reports:
      junit:
        - target/surefire-reports/TEST-*.xml

pages:
  stage: report
  dependencies:
    - test
  script:
    - mvn allure:report
    - mv target/site/allure-maven-plugin public
  artifacts:
    paths:
      - public
  only:
    - main
\`\`\`

### 3. GitHub Actions

**.github/workflows/tests.yml:**

\`\`\`yaml
name: Automated Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up JDK 11
      uses: actions/setup-java@v3
      with:
        java-version: '11'
        distribution: 'adopt'

    - name: Cache Maven packages
      uses: actions/cache@v3
      with:
        path: ~/.m2
        key: \${{ runner.os }}-m2-\${{ hashFiles('**/pom.xml') }}

    - name: Run tests
      run: mvn clean test

    - name: Generate Allure Report
      if: always()
      run: |
        mvn allure:report
        mvn allure:serve

    - name: Upload test results
      if: always()
      uses: actions/upload-artifact@v3
      with:
        name: test-results
        path: |
          target/surefire-reports/
          target/allure-results/

    - name: Publish Test Report
      if: always()
      uses: dorny/test-reporter@v1
      with:
        name: Test Results
        path: 'target/surefire-reports/*.xml'
        reporter: java-junit

    - name: Send Slack notification
      if: always()
      uses: 8398a7/action-slack@v3
      with:
        status: \${{ job.status }}
        webhook_url: \${{ secrets.SLACK_WEBHOOK }}
\`\`\`

### 4. Docker Integration

**Dockerfile для тестів:**

\`\`\`dockerfile
FROM maven:3.8.6-openjdk-11

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src

CMD ["mvn", "clean", "test"]
\`\`\`

**docker-compose.yml:**

\`\`\`yaml
version: '3'
services:
  selenium-hub:
    image: selenium/hub:latest
    ports:
      - "4444:4444"

  chrome:
    image: selenium/node-chrome:latest
    depends_on:
      - selenium-hub
    environment:
      - SE_EVENT_BUS_HOST=selenium-hub

  tests:
    build: .
    depends_on:
      - selenium-hub
      - chrome
    environment:
      - SELENIUM_GRID_URL=http://selenium-hub:4444/wd/hub
    volumes:
      - ./target:/app/target
\`\`\`

**Ключові компоненти CI/CD:**

- 🔄 **Автоматичний запуск** при commit/PR/schedule
- 🐳 **Docker** для ізольованого середовища
- ☁️ **Cloud Grid** (BrowserStack/Sauce Labs)
- 📊 **Reporting** через Allure/ExtentReports
- 📧 **Notifications** (Email/Slack/Teams)
- 📈 **Metrics** та trend analysis
- 🔐 **Credentials** через secrets
- 🎯 **Parallel execution** для швидкості

**Best Practices:**
- ✅ Smoke tests на кожен commit
- ✅ Full regression нічні runs
- ✅ Separate environments (dev/staging/prod)
- ✅ Test data management
- ✅ Retry failed tests механізм
- ✅ Historical trends tracking`
        }
      ]
    },
    {
      id: 'api-automation',
      title: 'API Automation',
      emoji: '🔌',
      description: 'RestAssured, HTTP, API Testing',
      questions: [
        {
          question: 'Які інструменти для API тестування знаєте?',
          answer: `Існує широкий спектр інструментів для автоматизації API тестування, кожен з яких має свої особливості та призначення.

**Основні інструменти:**

- **RestAssured** (Java) - найпопулярніша бібліотека для Java автоматизації, DSL-синтаксис, інтеграція з Maven/TestNG
- **Postman** - GUI інструмент для ручного та автоматизованого тестування, колекції тестів, Newman для CI/CD
- **SoapUI** - спеціалізований інструмент для SOAP та REST API, підтримка WS-Security
- **JMeter** - tool для performance та functional testing API
- **Karate DSL** - BDD-style framework для API testing без Java знань
- **HTTP Client** - Apache HttpClient або Java built-in HTTP client для кастомних рішень
- **WireMock** - бібліотека для API mocking та stubbing в тестах
- **REST-Assured** - інтеграція з Cucumber для BDD підходу

**Приклад вибору:**
- Для Java проєктів → RestAssured
- Для швидких manual перевірок → Postman
- Для performance → JMeter
- Для mocking → WireMock`
        },
        {
          question: 'Основні HTTP методи та їх призначення?',
          answer: `HTTP методи визначають тип операції, яку клієнт хоче виконати над ресурсом на сервері.

**Основні HTTP методи:**

| Метод | Призначення | Властивості |
|-------|-------------|-------------|
| **GET** | Отримання даних | Safe, Idempotent, Cacheable |
| **POST** | Створення нового ресурсу | Not Safe, Not Idempotent |
| **PUT** | Повне оновлення ресурсу | Not Safe, Idempotent |
| **PATCH** | Часткове оновлення | Not Safe, Not Idempotent |
| **DELETE** | Видалення ресурсу | Not Safe, Idempotent |
| **HEAD** | Як GET але без body | Safe, Idempotent |
| **OPTIONS** | Допустимі методи для ресурсу | Safe, Idempotent |

**Детальний опис:**

### GET
Отримання даних з сервера. Не повинен змінювати стан ресурсу.

\`\`\`java
given()
    .baseUri("https://api.example.com")
.when()
    .get("/users/123")
.then()
    .statusCode(200);
\`\`\`

### POST
Створення нового ресурсу.

\`\`\`java
given()
    .body(newUser)
.when()
    .post("/users")
.then()
    .statusCode(201);
\`\`\`

### PUT
Повна заміна існуючого ресурсу.

\`\`\`java
given()
    .body(updatedUser)
.when()
    .put("/users/123")
.then()
    .statusCode(200);
\`\`\`

### PATCH
Часткове оновлення полів ресурсу.

\`\`\`java
given()
    .body("{ \\"email\\": \\"newemail@example.com\\" }")
.when()
    .patch("/users/123")
.then()
    .statusCode(200);
\`\`\`

**Властивості:**
- **Safe** - не змінює стан ресурсу
- **Idempotent** - багаторазовий виклик = одиничний виклик`
        },
        {
          question: 'Базовий приклад RestAssured тесту?',
          answer: `RestAssured використовує Gherkin-style синтаксис (given-when-then) для читабельних API тестів.

**Базова структура тесту:**

\`\`\`java
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class UserApiTest {

    @Test
    public void createUserTest() {
        // Підготовка request body
        String requestBody = """
        {
            "name": "John Doe",
            "email": "john@example.com",
            "age": 30
        }
        """;

        given()
            .baseUri("https://api.example.com")
            .header("Content-Type", "application/json")
            .header("Authorization", "Bearer " + token)
            .auth().basic("username", "password")
            .body(requestBody)
            .log().all()
        .when()
            .post("/users")
        .then()
            .log().all()
            .statusCode(201)
            .body("id", notNullValue())
            .body("name", equalTo("John Doe"))
            .body("email", equalTo("john@example.com"))
            .body("age", is(30))
            .time(lessThan(2000L))
            .header("Content-Type", containsString("application/json"));
    }
}
\`\`\`

**Структура:**

1. **given()** - підготовка запиту (headers, auth, body, params)
2. **when()** - виконання HTTP методу (get, post, put, delete)
3. **then()** - валідація відповіді (status code, body, headers, time)

**Корисні методи:**

\`\`\`java
// Query Parameters
given().queryParam("page", 1).queryParam("size", 10)

// Path Parameters
given().pathParam("id", 123).get("/users/{id}")

// Form Parameters
given().formParam("username", "test")

// Logging
.log().all()        // Log everything
.log().headers()    // Log only headers
.log().body()       // Log only body

// Extract response
Response response = given().get("/users").then().extract().response();
String userId = response.path("id");
\`\`\``
        },
        {
          question: 'Як валідувати JSON response в RestAssured?',
          answer: `RestAssured надає потужні інструменти для валідації JSON відповідей через Hamcrest matchers та JsonPath.

**Способи валідації:**

### 1. Hamcrest Matchers (найпопулярніший)

\`\`\`java
given()
    .get("/users/123")
.then()
    .body("name", equalTo("John"))
    .body("age", greaterThan(18))
    .body("email", containsString("@"))
    .body("roles", hasSize(3))
    .body("roles", hasItems("admin", "user"))
    .body("address.city", equalTo("New York"))
    .body("isActive", is(true));
\`\`\`

### 2. JSON Path

\`\`\`java
// Вкладені поля
.body("user.profile.firstName", equalTo("John"))

// Масиви
.body("users[0].name", equalTo("John"))
.body("users.size()", equalTo(5))
.body("users.name", hasItems("John", "Jane"))

// Фільтрація
.body("users.findAll { it.age > 18 }.size()", greaterThan(2))
.body("users.find { it.name == 'John' }.email", equalTo("john@test.com"))
\`\`\`

### 3. JsonPath клас для складної валідації

\`\`\`java
Response response = given().get("/users").then().extract().response();
JsonPath jsonPath = response.jsonPath();

// Отримання значень
String userName = jsonPath.getString("user.name");
int userAge = jsonPath.getInt("user.age");
List<String> roles = jsonPath.getList("user.roles");

// Валідація
assertEquals("John", userName);
assertTrue(userAge > 18);
assertTrue(roles.contains("admin"));
\`\`\`

### 4. Schema Validation

\`\`\`java
import static io.restassured.module.jsv.JsonSchemaValidator.*;

given()
    .get("/users")
.then()
    .body(matchesJsonSchemaInClasspath("schemas/user-schema.json"));
\`\`\`

**user-schema.json:**

\`\`\`json
{
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "email": { "type": "string", "format": "email" }
  },
  "required": ["id", "name", "email"]
}
\`\`\`

### 5. Комплексна валідація

\`\`\`java
given()
    .get("/api/users")
.then()
    .body("users.findAll { it.age > 18 }.name",
          hasItems("John", "Jane"))
    .body("users.collect { it.email }.every { it.contains('@') }",
          is(true))
    .body("users*.age.sum()", greaterThan(100));
\`\`\``
        },
        {
          question: 'Що таке коди статусів HTTP?',
          answer: `HTTP status codes вказують на результат обробки запиту сервером. Поділяються на 5 категорій.

**Класифікація статус-кодів:**

### 2xx - Success (Успішні)

| Код | Назва | Опис |
|-----|-------|------|
| 200 | OK | Запит успішно оброблений |
| 201 | Created | Ресурс успішно створений |
| 202 | Accepted | Запит прийнятий до обробки |
| 204 | No Content | Успіх, але немає body |

\`\`\`java
// Валідація успішних відповідей
.then().statusCode(200)
.then().statusCode(anyOf(equalTo(200), equalTo(201)))
\`\`\`

### 3xx - Redirection (Перенаправлення)

| Код | Назва | Опис |
|-----|-------|------|
| 301 | Moved Permanently | Ресурс переміщено назавжди |
| 302 | Found | Тимчасове перенаправлення |
| 304 | Not Modified | Кеш актуальний |

### 4xx - Client Error (Помилки клієнта)

| Код | Назва | Опис |
|-----|-------|------|
| 400 | Bad Request | Невалідний запит |
| 401 | Unauthorized | Не автентифікований |
| 403 | Forbidden | Немає прав доступу |
| 404 | Not Found | Ресурс не знайдений |
| 405 | Method Not Allowed | Метод не підтримується |
| 409 | Conflict | Конфлікт (duplicate) |
| 422 | Unprocessable Entity | Валідація не пройдена |
| 429 | Too Many Requests | Rate limit перевищено |

\`\`\`java
// Валідація помилок
.then().statusCode(400)
.then().body("message", containsString("Invalid"))

// Негативні тести
given().auth().none()
.when().get("/secure-endpoint")
.then().statusCode(401);
\`\`\`

### 5xx - Server Error (Помилки сервера)

| Код | Назва | Опис |
|-----|-------|------|
| 500 | Internal Server Error | Помилка сервера |
| 502 | Bad Gateway | Помилка проксі |
| 503 | Service Unavailable | Сервіс недоступний |
| 504 | Gateway Timeout | Timeout проксі |

**Використання в тестах:**

\`\`\`java
@Test
public void testDifferentScenarios() {
    // Happy path
    given().get("/users").then().statusCode(200);

    // Resource created
    given().body(user).post("/users").then().statusCode(201);

    // Not found
    given().get("/users/9999").then().statusCode(404);

    // Unauthorized
    given().auth().none().get("/admin").then().statusCode(401);

    // Validation error
    given().body("{}").post("/users").then().statusCode(422);
}
\`\`\`

**Best Practice:** Завжди валідувати очікуваний status code в assert'ах!`
        },
        {
          question: 'Як працювати з authentication в API?',
          answer: `RestAssured підтримує різні типи автентифікації out-of-the-box.

**Типи Authentication:**

### 1. Basic Authentication

\`\`\`java
given()
    .auth().basic("username", "password")
.when()
    .get("/api/users")
.then()
    .statusCode(200);

// Preemptive - відправляє auth header одразу
given()
    .auth().preemptive().basic("username", "password")
.when()
    .get("/api/users");
\`\`\`

### 2. Bearer Token (JWT)

\`\`\`java
String token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

given()
    .header("Authorization", "Bearer " + token)
.when()
    .get("/api/users")
.then()
    .statusCode(200);

// Або через auth()
given()
    .auth().oauth2(token)
.when()
    .get("/api/users");
\`\`\`

### 3. OAuth 2.0

\`\`\`java
// Метод 1: Прямий токен
given()
    .auth().oauth2(accessToken)
.when()
    .get("/api/users");

// Метод 2: Отримання токена + використання
Response tokenResponse = given()
    .formParam("grant_type", "client_credentials")
    .formParam("client_id", clientId)
    .formParam("client_secret", clientSecret)
.when()
    .post("/oauth/token");

String accessToken = tokenResponse.path("access_token");

given()
    .auth().oauth2(accessToken)
.when()
    .get("/api/users");
\`\`\`

### 4. API Key

\`\`\`java
// Query parameter
given()
    .queryParam("api_key", "your-api-key-here")
.when()
    .get("/api/users");

// Header
given()
    .header("X-API-Key", "your-api-key-here")
.when()
    .get("/api/users");
\`\`\`

### 5. Digest Authentication

\`\`\`java
given()
    .auth().digest("username", "password")
.when()
    .get("/api/users");
\`\`\`

### 6. Session-based Auth

\`\`\`java
// Login і отримання session cookie
Response loginResponse = given()
    .body(credentials)
.when()
    .post("/login")
.then()
    .extract().response();

String sessionId = loginResponse.getCookie("JSESSIONID");

// Використання session в наступних запитах
given()
    .cookie("JSESSIONID", sessionId)
.when()
    .get("/api/users");
\`\`\`

**Централізоване керування:**

\`\`\`java
public class AuthHelper {
    private static String cachedToken;

    public static String getToken() {
        if (cachedToken == null || isTokenExpired()) {
            cachedToken = requestNewToken();
        }
        return cachedToken;
    }

    private static String requestNewToken() {
        return given()
            .formParam("grant_type", "client_credentials")
            .formParam("client_id", CLIENT_ID)
            .formParam("client_secret", CLIENT_SECRET)
        .when()
            .post("/oauth/token")
        .then()
            .extract().path("access_token");
    }
}

// Використання
given()
    .header("Authorization", "Bearer " + AuthHelper.getToken())
.when()
    .get("/api/users");
\`\`\``
        },
        {
          question: 'Як організована структура API фреймворку?',
          answer: `API automation framework організовується за принципом розділення відповідальностей та повторного використання коду.

**Типова структура проєкту:**

\`\`\`
api-automation-framework/
├── src/main/java/
│   ├── endpoints/              # API endpoints
│   │   ├── UserEndpoints.java
│   │   ├── ProductEndpoints.java
│   │   └── OrderEndpoints.java
│   ├── payloads/               # Request/Response POJO
│   │   ├── User.java
│   │   ├── Product.java
│   │   └── Order.java
│   ├── utils/                  # Utilities
│   │   ├── RequestSpecBuilder.java
│   │   ├── JsonUtils.java
│   │   └── AuthHelper.java
│   └── config/                 # Configuration
│       └── ConfigReader.java
├── src/test/java/
│   ├── tests/                  # Test classes
│   │   ├── UserTests.java
│   │   ├── ProductTests.java
│   │   └── OrderTests.java
│   └── base/                   # Base test setup
│       └── BaseTest.java
└── src/test/resources/
    ├── testdata/               # Test data
    │   ├── users.json
    │   └── products.json
    ├── schemas/                # JSON schemas
    │   └── user-schema.json
    └── config.properties       # Configuration
\`\`\`

**Приклад реалізації:**

### 1. Endpoint клас

\`\`\`java
public class UserEndpoints {
    private static final String BASE_PATH = "/api/users";

    public static Response createUser(User user) {
        return given()
            .spec(RequestSpecs.defaultSpec())
            .body(user)
        .when()
            .post(BASE_PATH);
    }

    public static Response getUser(int userId) {
        return given()
            .spec(RequestSpecs.defaultSpec())
            .pathParam("id", userId)
        .when()
            .get(BASE_PATH + "/{id}");
    }

    public static Response updateUser(int userId, User user) {
        return given()
            .spec(RequestSpecs.defaultSpec())
            .pathParam("id", userId)
            .body(user)
        .when()
            .put(BASE_PATH + "/{id}");
    }

    public static Response deleteUser(int userId) {
        return given()
            .spec(RequestSpecs.defaultSpec())
            .pathParam("id", userId)
        .when()
            .delete(BASE_PATH + "/{id}");
    }
}
\`\`\`

### 2. Payload POJO

\`\`\`java
@Data
@Builder
public class User {
    private Integer id;
    private String name;
    private String email;
    private int age;
    private String role;
}
\`\`\`

### 3. RequestSpecBuilder

\`\`\`java
public class RequestSpecs {
    public static RequestSpecification defaultSpec() {
        return new RequestSpecBuilder()
            .setBaseUri(ConfigReader.getProperty("base.uri"))
            .setContentType(ContentType.JSON)
            .addHeader("Authorization", "Bearer " + AuthHelper.getToken())
            .setRelaxedHTTPSValidation()
            .addFilter(new RequestLoggingFilter())
            .addFilter(new ResponseLoggingFilter())
            .build();
    }
}
\`\`\`

### 4. Test клас

\`\`\`java
public class UserTests extends BaseTest {

    @Test
    public void createUserTest() {
        User user = User.builder()
            .name("John Doe")
            .email("john@test.com")
            .age(30)
            .role("admin")
            .build();

        Response response = UserEndpoints.createUser(user);

        response.then()
            .statusCode(201)
            .body("name", equalTo(user.getName()))
            .body("email", equalTo(user.getEmail()))
            .body(matchesJsonSchemaInClasspath("schemas/user-schema.json"));

        int userId = response.path("id");
        createdUserIds.add(userId); // Cleanup later
    }

    @Test
    public void getUserTest() {
        int userId = createTestUser();

        UserEndpoints.getUser(userId)
            .then()
            .statusCode(200)
            .body("id", equalTo(userId))
            .body("name", notNullValue());
    }
}
\`\`\`

**Переваги такої структури:**
- 📁 Чітке розділення відповідальностей
- ♻️ Повторне використання endpoint методів
- 🧪 Легке написання та підтримка тестів
- 📊 Централізована конфігурація
- 🔄 Легка інтеграція з CI/CD`
        },
        {
          question: 'Що таке Specification в RestAssured?',
          answer: `Specification в RestAssured - це механізм для створення переусадкопанікс базових налаштувань запитів та відповідей, який дозволяє уникнути дублювання коду.

**Types of Specifications:**

### 1. RequestSpecification

Базова конфігурація для всіх запитів.

\`\`\`java
public class RequestSpecs {

    public static RequestSpecification baseSpec() {
        return new RequestSpecBuilder()
            .setBaseUri("https://api.example.com")
            .setBasePath("/api/v1")
            .setContentType(ContentType.JSON)
            .setAccept(ContentType.JSON)
            .addHeader("User-Agent", "RestAssured-Tests")
            .setRelaxedHTTPSValidation()
            .log(LogDetail.ALL)
            .build();
    }

    public static RequestSpecification authenticatedSpec() {
        return new RequestSpecBuilder()
            .addRequestSpecification(baseSpec())
            .addHeader("Authorization", "Bearer " + getToken())
            .build();
    }

    public static RequestSpecification adminSpec() {
        return new RequestSpecBuilder()
            .addRequestSpecification(authenticatedSpec())
            .addHeader("X-User-Role", "admin")
            .build();
    }
}
\`\`\`

**Використання:**

\`\`\`java
// Без specification (багато дублювання)
given()
    .baseUri("https://api.example.com")
    .basePath("/api/v1")
    .contentType(ContentType.JSON)
    .header("Authorization", "Bearer " + token)
.when()
    .get("/users");

// З specification (чисто і просто)
given()
    .spec(RequestSpecs.authenticatedSpec())
.when()
    .get("/users");
\`\`\`

### 2. ResponseSpecification

Очікувані умови для всіх відповідей.

\`\`\`java
public class ResponseSpecs {

    public static ResponseSpecification successSpec() {
        return new ResponseSpecBuilder()
            .expectStatusCode(200)
            .expectContentType(ContentType.JSON)
            .expectResponseTime(lessThan(2000L))
            .build();
    }

    public static ResponseSpecification createdSpec() {
        return new ResponseSpecBuilder()
            .expectStatusCode(201)
            .expectContentType(ContentType.JSON)
            .expectHeader("Location", notNullValue())
            .build();
    }

    public static ResponseSpecification errorSpec() {
        return new ResponseSpecBuilder()
            .expectStatusCode(anyOf(equalTo(400), equalTo(404), equalTo(422)))
            .expectContentType(ContentType.JSON)
            .expectBody("message", notNullValue())
            .build();
    }
}
\`\`\`

**Використання:**

\`\`\`java
given()
    .spec(RequestSpecs.authenticatedSpec())
.when()
    .get("/users")
.then()
    .spec(ResponseSpecs.successSpec())
    .body("users", hasSize(greaterThan(0)));
\`\`\`

### 3. Global Specifications

Встановлення default specifications для всіх тестів.

\`\`\`java
@BeforeClass
public void setup() {
    RestAssured.baseURI = "https://api.example.com";
    RestAssured.basePath = "/api/v1";
    RestAssured.requestSpecification = RequestSpecs.baseSpec();
    RestAssured.responseSpecification = ResponseSpecs.successSpec();
}

@Test
public void simpleTest() {
    // Використовує global specs автоматично
    given()
        .header("Authorization", "Bearer " + token)
    .when()
        .get("/users")
    .then()
        .body("users.size()", greaterThan(0));
}
\`\`\`

### 4. Комбінування Specifications

\`\`\`java
// Комбінування кількох request specs
RequestSpecification combinedSpec = new RequestSpecBuilder()
    .addRequestSpecification(RequestSpecs.baseSpec())
    .addRequestSpecification(RequestSpecs.authenticatedSpec())
    .addQueryParam("page", 1)
    .addQueryParam("size", 10)
    .build();

given()
    .spec(combinedSpec)
.when()
    .get("/users");
\`\`\`

**Переваги Specifications:**
- ♻️ DRY principle - no code duplication
- 🎯 Централізована конфігурація
- 🧪 Легке тестування різних середовищ
- 📝 Читабельність тестів
- 🔧 Легка зміна базових налаштувань`
        },
        {
          question: 'Як тестувати різні типи контенту?',
          answer: `RestAssured підтримує роботу з різними типами контенту - JSON, XML, form data, files та binary data.

**Типи контенту:**

### 1. JSON (найпопулярніший)

\`\`\`java
// Відправка JSON
String jsonBody = """
{
    "name": "John",
    "email": "john@test.com"
}
""";

given()
    .contentType(ContentType.JSON)
    .body(jsonBody)
.when()
    .post("/users");

// Відправка POJO (автоконвертація в JSON)
User user = new User("John", "john@test.com");

given()
    .contentType(ContentType.JSON)
    .body(user)
.when()
    .post("/users");

// Валідація JSON response
given()
    .accept(ContentType.JSON)
.when()
    .get("/users/123")
.then()
    .contentType(ContentType.JSON)
    .body("name", equalTo("John"));
\`\`\`

### 2. XML

\`\`\`java
// Відправка XML
String xmlBody = """
<user>
    <name>John</name>
    <email>john@test.com</email>
</user>
""";

given()
    .contentType(ContentType.XML)
    .body(xmlBody)
.when()
    .post("/users");

// Валідація XML response через XmlPath
given()
    .accept(ContentType.XML)
.when()
    .get("/users/123")
.then()
    .contentType(ContentType.XML)
    .body("user.name", equalTo("John"))
    .body("user.email", equalTo("john@test.com"));

// Extract XML
Response response = given().get("/users/123.xml");
XmlPath xmlPath = response.xmlPath();
String name = xmlPath.getString("user.name");
\`\`\`

### 3. Form Data (application/x-www-form-urlencoded)

\`\`\`java
given()
    .formParam("username", "john")
    .formParam("password", "pass123")
    .formParam("remember", true)
.when()
    .post("/login")
.then()
    .statusCode(200);

// Кілька значень для одного ключа
given()
    .formParam("roles", "admin", "user", "moderator")
.when()
    .post("/users");
\`\`\`

### 4. Multipart/Form Data (File Upload)

\`\`\`java
// Завантаження файлу
File file = new File("src/test/resources/testdata/avatar.png");

given()
    .multiPart("file", file, "image/png")
    .multiPart("userId", "123")
    .multiPart("description", "User avatar")
.when()
    .post("/upload")
.then()
    .statusCode(200)
    .body("filename", equalTo("avatar.png"));

// Завантаження кількох файлів
given()
    .multiPart("file1", new File("file1.pdf"))
    .multiPart("file2", new File("file2.pdf"))
.when()
    .post("/upload/multiple");

// Завантаження з byte array
byte[] bytes = Files.readAllBytes(Paths.get("file.pdf"));

given()
    .multiPart("file", "filename.pdf", bytes, "application/pdf")
.when()
    .post("/upload");
\`\`\`

### 5. Binary Data

\`\`\`java
// Відправка binary data
byte[] binaryData = Files.readAllBytes(Paths.get("image.png"));

given()
    .contentType("application/octet-stream")
    .body(binaryData)
.when()
    .post("/upload/binary");

// Завантаження binary response
Response response = given()
    .accept("application/octet-stream")
.when()
    .get("/download/image/123");

byte[] imageBytes = response.asByteArray();
Files.write(Paths.get("downloaded-image.png"), imageBytes);
\`\`\`

### 6. Plain Text

\`\`\`java
given()
    .contentType(ContentType.TEXT)
    .body("Plain text content")
.when()
    .post("/notes");

// Валідація text response
given()
    .get("/health")
.then()
    .contentType(ContentType.TEXT)
    .body(containsString("OK"));
\`\`\`

### 7. HTML Content

\`\`\`java
// Парсинг HTML response
Response response = given().get("/page");
String html = response.asString();

// Використання JSoup для парсингу HTML
Document doc = Jsoup.parse(html);
String title = doc.title();
Elements links = doc.select("a[href]");
\`\`\`

**Content Type Headers:**

\`\`\`java
.contentType(ContentType.JSON)        // application/json
.contentType(ContentType.XML)         // application/xml
.contentType(ContentType.TEXT)        // text/plain
.contentType(ContentType.HTML)        // text/html
.contentType("application/pdf")       // Custom
\`\`\`

**Best Practices:**
- Завжди встановлювати правильний Content-Type
- Використовувати валідацію contentType() в assertions
- Для файлів - перевіряти Content-Disposition header`
        }
      ]
    },
    {
      id: 'ui-automation',
      title: 'UI Automation',
      emoji: '🖥️',
      description: 'Selenium WebDriver, Locators, Waits',
      questions: [
        {
          question: 'Типи локаторів в Selenium?',
          answer: `**ID**: найшвидший і найнадійніший локатор.

\`\`\`java
driver.findElement(By.id("elementId"));
\`\`\`

**Основні типи локаторів:**
- **By.id()** - пошук по id атрибуту
- **By.name()** - пошук по name атрибуту
- **By.className()** - по CSS класу
- **By.tagName()** - по тегу HTML
- **By.linkText()** - по повному тексту посилання
- **By.partialLinkText()** - по частині тексту посилання
- **By.cssSelector()** - CSS селектори (#id, .class, [attr])
- **By.xpath()** - XPath вирази для складних пошуків

**Best Practices:**
- Перевага: id > name > cssSelector > xpath
- Уникати абсолютних XPath
- Використовувати унікальні та стабільні атрибути`
        },
        {
          question: 'CSS Selector vs XPath?',
          answer: `**CSS Selector** - швидший, але обмежений у функціональності.

**Переваги CSS:**
- Швидша робота (особливо в IE)
- Простіший та читабельніший синтаксис
- Краща підтримка в браузерах

**Недоліки CSS:**
- Не може йти вгору по DOM дереву
- Не підтримує пошук по тексту
- Обмежені можливості для складних умов

**Переваги XPath:**
- Може йти в будь-якому напрямку (.., parent::, ancestor::)
- Підтримує текст: \`//button[text()='Submit']\`
- Більше функцій: contains(), starts-with(), normalize-space()
- Можна комбінувати з логічними операторами

**Коли використовувати:**
- CSS - для простих випадків, швидкості
- XPath - для складної навігації, пошуку по тексту`
        },
        {
          question: 'Типи Waits в Selenium?',
          answer: `**1. Implicit Wait** - глобальне очікування для всіх елементів.

\`\`\`java
driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
\`\`\`

**2. Explicit Wait** - очікування конкретної умови для певного елемента.

\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("element")));
\`\`\`

**3. Fluent Wait** - найбільш гнучке очікування з налаштуваннями.

\`\`\`java
Wait<WebDriver> wait = new FluentWait<>(driver)
    .withTimeout(Duration.ofSeconds(30))
    .pollingEvery(Duration.ofSeconds(2))
    .ignoring(NoSuchElementException.class);
\`\`\`

**Best Practices:**
- Не змішувати Implicit та Explicit Wait
- Використовувати Explicit Wait для динамічних елементів
- Fluent Wait - для нестабільних елементів з налаштуванням polling`
        },
        {
          question: 'ExpectedConditions приклади?',
          answer: `Часто використовувані умови очікування:

**Видимість та присутність:**
- \`visibilityOfElementLocated(By locator)\` - елемент видимий на сторінці
- \`presenceOfElementLocated(By locator)\` - елемент присутній в DOM
- \`invisibilityOfElementLocated(By locator)\` - елемент невидимий або відсутній

**Клікабельність:**
- \`elementToBeClickable(By locator)\` - елемент видимий і enabled для кліку

**Текст та атрибути:**
- \`textToBePresentInElement(WebElement, String)\` - текст присутній в елементі
- \`attributeContains(By, String attr, String value)\` - атрибут містить значення

**Alerts та Frames:**
- \`alertIsPresent()\` - alert з'явився на сторінці
- \`frameToBeAvailableAndSwitchToIt()\` - frame доступний і переключення виконано

**Приклад використання:**

\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
WebElement element = wait.until(
    ExpectedConditions.elementToBeClickable(By.id("submitBtn"))
);
element.click();
\`\`\``
        },
        {
          question: 'Як працювати з випадаючими списками?',
          answer: `**Select клас** для роботи з \`<select>\` елементами:

\`\`\`java
Select dropdown = new Select(driver.findElement(By.id("dropdown")));

// Вибір по видимому тексту
dropdown.selectByVisibleText("Option 1");

// Вибір по value атрибуту
dropdown.selectByValue("opt1");

// Вибір по індексу
dropdown.selectByIndex(0);

// Отримати всі опції
List<WebElement> options = dropdown.getOptions();

// Отримати вибрані опції
List<WebElement> selected = dropdown.getAllSelectedOptions();

// Зняти всі вибори (для multi-select)
dropdown.deselectAll();
\`\`\`

**Для кастомних dropdown (не \`<select>\`):**
- Використовувати звичайні кліки
- Шукати елементи списку через XPath/CSS
- Може знадобитись scroll або Actions для наведення`
        },
        {
          question: 'Як працювати з Alerts?',
          answer: `**Переключення на Alert:**

\`\`\`java
Alert alert = driver.switchTo().alert();
\`\`\`

**Основні методи:**

\`\`\`java
// Отримати текст alert
String alertText = alert.getText();

// Прийняти alert (натиснути OK)
alert.accept();

// Відхилити alert (натиснути Cancel)
alert.dismiss();

// Ввести текст (для prompt alert)
alert.sendKeys("Test input");
\`\`\`

**Очікування появи alert:**

\`\`\`java
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(5));
wait.until(ExpectedConditions.alertIsPresent());
Alert alert = driver.switchTo().alert();
\`\`\`

**Типи alerts:**
- **Alert** - тільки OK кнопка
- **Confirm** - OK та Cancel
- **Prompt** - поле вводу + OK/Cancel

Після роботи з alert контроль автоматично повертається до головного вікна.`
        },
        {
          question: 'Як працювати з Frames/IFrames?',
          answer: `**Переключення на frame:**

\`\`\`java
// По індексу
driver.switchTo().frame(0);

// По name або id
driver.switchTo().frame("frameName");

// По WebElement
WebElement frameElement = driver.findElement(By.id("frameId"));
driver.switchTo().frame(frameElement);
\`\`\`

**Повернення з frame:**

\`\`\`java
// На головну сторінку (default content)
driver.switchTo().defaultContent();

// На батьківський frame
driver.switchTo().parentFrame();
\`\`\`

**Важливо:**
- Перед роботою з елементами всередині frame треба на нього переключитись
- Елементи поза поточним frame недоступні без переключення
- Вкладені frames потребують послідовного переключення
- Після закінчення роботи рекомендується повернутись на defaultContent()`
        },
        {
          question: 'Як працювати з вікнами/вкладками?',
          answer: `**Отримання window handles:**

\`\`\`java
// Поточне вікно
String mainWindow = driver.getWindowHandle();

// Всі відкриті вікна/вкладки
Set<String> allWindows = driver.getWindowHandles();
\`\`\`

**Переключення між вікнами:**

\`\`\`java
for (String handle : allWindows) {
    if (!handle.equals(mainWindow)) {
        driver.switchTo().window(handle);
        break;
    }
}
\`\`\`

**Відкриття нового вікна/вкладки:**

\`\`\`java
// Нова вкладка
driver.switchTo().newWindow(WindowType.TAB);

// Нове вікно
driver.switchTo().newWindow(WindowType.WINDOW);
\`\`\`

**Закриття вікон:**

\`\`\`java
// Закрити поточне вікно
driver.close();

// Закрити всі вікна та завершити сесію
driver.quit();
\`\`\``
        },
        {
          question: 'Actions клас - для чого?',
          answer: `**Actions** використовується для складних взаємодій з елементами.

**Робота з мишею:**

\`\`\`java
Actions actions = new Actions(driver);

// Наведення миші
actions.moveToElement(element).perform();

// Подвійний клік
actions.doubleClick(element).perform();

// Правий клік (context menu)
actions.contextClick(element).perform();

// Drag and Drop
actions.clickAndHold(source)
       .moveToElement(target)
       .release()
       .perform();

// Або простіше
actions.dragAndDrop(source, target).perform();
\`\`\`

**Робота з клавіатурою:**

\`\`\`java
// Натискання клавіш
actions.sendKeys(element, "text").perform();

// Модифікатори (Ctrl, Shift, Alt)
actions.keyDown(Keys.CONTROL)
       .sendKeys("a")
       .keyUp(Keys.CONTROL)
       .perform();
\`\`\`

**Важливо:** Завжди завершувати ланцюжок викликом \`.build().perform()\` або просто \`.perform()\``
        },
        {
          question: 'Як взяти screenshot при failed тесті?',
          answer: `**Базовий спосіб - TakesScreenshot:**

\`\`\`java
TakesScreenshot ts = (TakesScreenshot) driver;
File source = ts.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(source, new File("./screenshots/failed.png"));
\`\`\`

**Інтеграція з TestNG (@AfterMethod):**

\`\`\`java
@AfterMethod
public void takeScreenshotOnFailure(ITestResult result) {
    if (result.getStatus() == ITestResult.FAILURE) {
        TakesScreenshot ts = (TakesScreenshot) driver;
        File source = ts.getScreenshotAs(OutputType.FILE);
        String testName = result.getName();
        FileUtils.copyFile(source,
            new File("./screenshots/" + testName + ".png"));
    }
}
\`\`\`

**Використання ITestListener:**

\`\`\`java
public class TestListener implements ITestListener {
    @Override
    public void onTestFailure(ITestResult result) {
        // Screenshot логіка тут
    }
}
\`\`\`

**Для Allure звіту:**
- Додавати через @Attachment анотацію
- Автоматично прикріплюється до звіту`
        }
      ]
    },
    {
      id: 'sql',
      title: 'SQL Queries',
      emoji: '🗄️',
      description: 'SQL, Joins, Subqueries, Database Testing',
      questions: [
        {
          question: 'Різниця між INNER JOIN та LEFT JOIN?',
          answer: `**INNER JOIN** - повертає тільки співпадаючі рядки з обох таблиць.

\`\`\`sql
SELECT orders.id, customers.name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.id;
\`\`\`
Результат: тільки замовлення з існуючими клієнтами.

**LEFT JOIN** (LEFT OUTER JOIN) - всі рядки з лівої таблиці + співпадаючі з правої.

\`\`\`sql
SELECT customers.name, orders.id
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id;
\`\`\`
Результат: всі клієнти, навіть без замовлень (orders.id буде NULL).

**RIGHT JOIN** - аналогічно, але всі рядки з правої таблиці.

**FULL OUTER JOIN** - всі рядки з обох таблиць, NULL де немає співпадінь.

**Використання:** INNER JOIN - коли потрібні тільки пов'язані дані, LEFT/RIGHT JOIN - коли потрібні всі записи з однієї таблиці.`
        },
        {
          question: 'Що таке subquery і його типи?',
          answer: `**Subquery (підзапит)** - SQL запит всередині іншого запиту.

**1. Scalar Subquery** - повертає одне значення:

\`\`\`sql
SELECT name FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
\`\`\`

**2. Row Subquery** - повертає один рядок:

\`\`\`sql
SELECT * FROM employees
WHERE (dept_id, salary) = (SELECT dept_id, MAX(salary) FROM employees);
\`\`\`

**3. Table Subquery** - повертає таблицю (з IN, EXISTS):

\`\`\`sql
SELECT name FROM employees
WHERE dept_id IN (SELECT id FROM departments WHERE location = 'NY');
\`\`\`

**4. Correlated Subquery** - залежить від зовнішнього запиту:

\`\`\`sql
SELECT e1.name, e1.salary
FROM employees e1
WHERE salary > (SELECT AVG(salary) FROM employees e2
                WHERE e2.dept_id = e1.dept_id);
\`\`\`

Correlated виконується для КОЖНОГО рядка зовнішнього запиту, тому може бути повільним.`
        },
        {
          question: 'Різниця між WHERE та HAVING?',
          answer: `**WHERE** - фільтрація ПЕРЕД групуванням (не може використовувати aggregate функції).

\`\`\`sql
SELECT department, COUNT(*)
FROM employees
WHERE salary > 50000  -- Фільтр перед групуванням
GROUP BY department;
\`\`\`

**HAVING** - фільтрація ПІСЛЯ GROUP BY (може використовувати aggregate функції).

\`\`\`sql
SELECT department, COUNT(*) as emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;  -- Фільтр після групування
\`\`\`

**Комбінація WHERE та HAVING:**

\`\`\`sql
SELECT department, AVG(salary) as avg_sal
FROM employees
WHERE hire_date > '2020-01-01'  -- Спочатку WHERE
GROUP BY department
HAVING AVG(salary) > 60000;     -- Потім HAVING
\`\`\`

**Правило:** WHERE - для фільтрації рядків, HAVING - для фільтрації груп.

**Performance:** WHERE швидший, тому що фільтрує дані до групування (менше рядків для обробки).`
        },
        {
          question: 'Aggregate функції в SQL?',
          answer: `**Основні aggregate функції:**

**COUNT()** - кількість рядків:
\`\`\`sql
SELECT COUNT(*) FROM employees;           -- Всі рядки
SELECT COUNT(commission) FROM employees;  -- Без NULL
SELECT COUNT(DISTINCT department) FROM employees; -- Унікальні
\`\`\`

**SUM()** - сума значень:
\`\`\`sql
SELECT SUM(salary) FROM employees;
\`\`\`

**AVG()** - середнє значення:
\`\`\`sql
SELECT AVG(salary) FROM employees;
\`\`\`

**MAX()** та **MIN()** - максимум і мінімум:
\`\`\`sql
SELECT MAX(salary), MIN(salary) FROM employees;
\`\`\`

**Використання з GROUP BY:**

\`\`\`sql
SELECT department,
       COUNT(*) as emp_count,
       AVG(salary) as avg_salary,
       MAX(salary) as max_salary
FROM employees
GROUP BY department;
\`\`\`

**Важливо:**
- COUNT(*) рахує всі рядки включно з NULL
- COUNT(column) рахує тільки NOT NULL значення
- Aggregate функції ігнорують NULL (крім COUNT(*))`
        },
        {
          question: 'Різниця між UNION та UNION ALL?',
          answer: `**UNION** - об'єднує результати та **видаляє дублікати**:

\`\`\`sql
SELECT name FROM employees_2020
UNION
SELECT name FROM employees_2021;
\`\`\`
Результат: унікальні імена з обох таблиць (без дублікатів).

**UNION ALL** - об'єднує результати та **зберігає дублікати**:

\`\`\`sql
SELECT name FROM employees_2020
UNION ALL
SELECT name FROM employees_2021;
\`\`\`
Результат: всі рядки з обох таблиць, дублікати збережені.

**Performance:**
- UNION ALL швидший (не робить сортування та видалення дублікатів)
- UNION повільніший (додаткова робота з distinct та sort)

**Вимоги для обох:**
- Однакова кількість колонок
- Сумісні типи даних в колонках
- Порядок колонок має значення

**Коли використовувати:**
- UNION - коли потрібні унікальні значення
- UNION ALL - коли дублікати допустимі або їх точно немає (швидше)`
        },
        {
          question: 'Що таке Primary Key, Foreign Key, Unique?',
          answer: `**PRIMARY KEY** - унікальний ідентифікатор рядка в таблиці:

\`\`\`sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100)
);
\`\`\`

Властивості:
- Унікальне значення для кожного рядка
- NOT NULL (не може бути порожнім)
- Тільки ОДИН Primary Key на таблицю
- Автоматично створюється індекс

**FOREIGN KEY** - посилання на Primary Key іншої таблиці:

\`\`\`sql
CREATE TABLE orders (
    id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

Властивості:
- Забезпечує referential integrity
- Може бути NULL (якщо дозволено)
- Можна мати кілька Foreign Keys в таблиці
- Захищає від видалення пов'язаних даних

**UNIQUE** - унікальність значень в колонці:

\`\`\`sql
CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(100) UNIQUE
);
\`\`\`

Властивості:
- Гарантує унікальність
- Дозволяє NULL (один NULL)
- Може бути кілька UNIQUE constraints в таблиці`
        },
        {
          question: 'DDL vs DML vs DCL vs TCL?',
          answer: `**DDL (Data Definition Language)** - визначення структури БД:

\`\`\`sql
CREATE TABLE users (id INT, name VARCHAR(50));
ALTER TABLE users ADD COLUMN email VARCHAR(100);
DROP TABLE old_users;
TRUNCATE TABLE temp_data;
\`\`\`

**DML (Data Manipulation Language)** - маніпуляція даними:

\`\`\`sql
SELECT * FROM users WHERE age > 18;
INSERT INTO users (name, age) VALUES ('John', 25);
UPDATE users SET age = 26 WHERE id = 1;
DELETE FROM users WHERE id = 5;
\`\`\`

**DCL (Data Control Language)** - управління правами доступу:

\`\`\`sql
GRANT SELECT, INSERT ON database.table TO 'user'@'localhost';
REVOKE INSERT ON database.table FROM 'user'@'localhost';
\`\`\`

**TCL (Transaction Control Language)** - управління транзакціями:

\`\`\`sql
BEGIN TRANSACTION;
    UPDATE accounts SET balance = balance - 100 WHERE id = 1;
    UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;  -- або ROLLBACK при помилці

SAVEPOINT sp1;  -- Точка збереження в транзакції
\`\`\`

**Ключові відмінності:**
- DDL - автоматичний COMMIT, не можна відкотити
- DML - можна відкотити через ROLLBACK
- DCL - права та безпека
- TCL - контроль транзакцій`
        },
        {
          question: 'Як тестувати базу даних в автоматизації?',
          answer: `**JDBC підключення в Java:**

\`\`\`java
// 1. Завантажити драйвер
Class.forName("com.mysql.cj.jdbc.Driver");

// 2. Створити з'єднання
String url = "jdbc:mysql://localhost:3306/testdb";
Connection con = DriverManager.getConnection(url, "user", "password");

// 3. Створити Statement
Statement stmt = con.createStatement();

// 4. Виконати запит
ResultSet rs = stmt.executeQuery("SELECT * FROM users WHERE age > 18");

// 5. Обробити результат
while (rs.next()) {
    String name = rs.getString("name");
    int age = rs.getInt("age");
    assertEquals("Expected name", name);
    assertTrue(age > 18);
}

// 6. Закрити ресурси
rs.close();
stmt.close();
con.close();
\`\`\`

**PreparedStatement (для безпеки та параметрів):**

\`\`\`java
String query = "SELECT * FROM users WHERE id = ?";
PreparedStatement pstmt = con.prepareStatement(query);
pstmt.setInt(1, userId);
ResultSet rs = pstmt.executeQuery();
\`\`\`

**Best Practices:**
- Використовувати try-with-resources
- PreparedStatement для запобігання SQL injection
- Перевіряти кількість рядків, значення колонок
- Cleanup даних після тестів`
        },
        {
          question: 'Індекси в БД - що це?',
          answer: `**Індекс** - структура даних для швидкого пошуку рядків в таблиці.

**Створення індексу:**

\`\`\`sql
CREATE INDEX idx_email ON users(email);
CREATE UNIQUE INDEX idx_username ON users(username);
CREATE INDEX idx_name_age ON users(name, age); -- Composite index
\`\`\`

**Типи індексів:**

**Clustered Index:**
- Сортує фізичні дані в таблиці
- Тільки ОДИН на таблицю
- Зазвичай створюється на Primary Key автоматично

**Non-Clustered Index:**
- Окрема структура з вказівниками на дані
- Можна мати багато Non-clustered indexes
- Не змінює фізичне розташування даних

**Плюси індексів:**
- Швидкий SELECT, WHERE, JOIN, ORDER BY
- Покращує performance для великих таблиць

**Мінуси індексів:**
- Повільніше INSERT, UPDATE, DELETE
- Займає додаткове місце на диску
- Потребує підтримки (rebuild, reorganize)

**Коли використовувати:**
- Колонки в WHERE, JOIN, ORDER BY
- Колонки з високою selectivity (багато унікальних значень)
- Великі таблиці з частими read операціями`
        }
      ]
    },
    {
      id: 'streams',
      title: 'Stream & Logic Tasks',
      emoji: '🧮',
      description: 'Java Streams та логічні задачі',
      questions: [
        {
          question: 'Знайти максимальне число в списку через Stream',
          answer: `**Використання max() з Comparator:**

\`\`\`java
List<Integer> numbers = Arrays.asList(3, 7, 2, 9, 4, 1);

// Спосіб 1: через max() з compareTo
int max = numbers.stream()
    .max(Integer::compareTo)
    .orElse(0);  // значення по замовчуванню якщо список порожній

// Спосіб 2: через mapToInt (для примітивів)
int max = numbers.stream()
    .mapToInt(Integer::intValue)
    .max()
    .getAsInt();  // викине NoSuchElementException якщо список порожній

// Спосіб 3: через reduce
int max = numbers.stream()
    .reduce(Integer.MIN_VALUE, Integer::max);
\`\`\`

**Для знаходження мінімуму:**

\`\`\`java
int min = numbers.stream()
    .min(Integer::compareTo)
    .orElse(0);
\`\`\`

**Для об'єктів:**

\`\`\`java
Employee maxSalaryEmp = employees.stream()
    .max(Comparator.comparing(Employee::getSalary))
    .orElse(null);
\`\`\``
        },
        {
          question: 'Відфільтрувати парні числа та помножити на 2',
          answer: `**Використання filter() та map():**

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);

List<Integer> result = numbers.stream()
    .filter(n -> n % 2 == 0)    // Залишити тільки парні
    .map(n -> n * 2)             // Помножити кожне на 2
    .collect(Collectors.toList());

// result = [4, 8, 12, 16]
\`\`\`

**Інші варіанти фільтрації:**

\`\`\`java
// Непарні числа
List<Integer> odd = numbers.stream()
    .filter(n -> n % 2 != 0)
    .collect(Collectors.toList());

// Числа більше 5
List<Integer> moreThan5 = numbers.stream()
    .filter(n -> n > 5)
    .collect(Collectors.toList());

// Парні числа більше 3, помножені на 3
List<Integer> complex = numbers.stream()
    .filter(n -> n % 2 == 0)
    .filter(n -> n > 3)
    .map(n -> n * 3)
    .collect(Collectors.toList());
\`\`\`

**Для об'єктів:**

\`\`\`java
List<Employee> highEarners = employees.stream()
    .filter(e -> e.getSalary() > 50000)
    .filter(e -> e.getDepartment().equals("IT"))
    .collect(Collectors.toList());
\`\`\``
        },
        {
          question: 'Згрупувати список об\'єктів по полю',
          answer: `**groupingBy() для групування:**

\`\`\`java
List<Employee> employees = Arrays.asList(
    new Employee("John", "IT", 60000),
    new Employee("Jane", "HR", 50000),
    new Employee("Bob", "IT", 70000)
);

// Групування по департаменту
Map<String, List<Employee>> byDept = employees.stream()
    .collect(Collectors.groupingBy(Employee::getDepartment));

// Результат: {IT=[John, Bob], HR=[Jane]}
\`\`\`

**Підрахунок кількості в кожній групі:**

\`\`\`java
Map<String, Long> countByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.counting()
    ));

// Результат: {IT=2, HR=1}
\`\`\`

**Сума по групах:**

\`\`\`java
Map<String, Double> sumSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.summingDouble(Employee::getSalary)
    ));
\`\`\`

**Середнє значення по групах:**

\`\`\`java
Map<String, Double> avgSalaryByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.averagingDouble(Employee::getSalary)
    ));
\`\`\`

**Групування з mapping:**

\`\`\`java
Map<String, List<String>> namesByDept = employees.stream()
    .collect(Collectors.groupingBy(
        Employee::getDepartment,
        Collectors.mapping(Employee::getName, Collectors.toList())
    ));
\`\`\``
        },
        {
          question: 'Видалити дублікати зі списку',
          answer: `**Через Stream distinct():**

\`\`\`java
List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 3, 3, 4, 5, 5);

List<Integer> unique = numbers.stream()
    .distinct()
    .collect(Collectors.toList());

// Результат: [1, 2, 3, 4, 5]
\`\`\`

**Через LinkedHashSet (зберігає порядок):**

\`\`\`java
Set<Integer> uniqueSet = new LinkedHashSet<>(numbers);
List<Integer> unique = new ArrayList<>(uniqueSet);
\`\`\`

**Через HashSet (не зберігає порядок, швидше):**

\`\`\`java
Set<Integer> uniqueSet = new HashSet<>(numbers);
List<Integer> unique = new ArrayList<>(uniqueSet);
\`\`\`

**Для об'єктів (distinct по полю):**

\`\`\`java
// Видалити дублікати Employee по email
List<Employee> unique = employees.stream()
    .collect(Collectors.toMap(
        Employee::getEmail,
        e -> e,
        (existing, replacement) -> existing  // при дублікаті - залишити перший
    ))
    .values()
    .stream()
    .collect(Collectors.toList());

// Або через distinctByKey (custom collector)
List<Employee> unique = employees.stream()
    .filter(distinctByKey(Employee::getEmail))
    .collect(Collectors.toList());
\`\`\`

**Performance:** HashSet - O(1) для lookup, distinct() - O(n) але зручніше для stream pipeline.`
        },
        {
          question: 'Перевернути рядок',
          answer: `**Найпростіший спосіб - StringBuilder:**

\`\`\`java
String original = "Hello World";
String reversed = new StringBuilder(original).reverse().toString();
// Результат: "dlroW olleH"
\`\`\`

**Ручний спосіб (через loop):**

\`\`\`java
String reversed = "";
for (int i = original.length() - 1; i >= 0; i--) {
    reversed += original.charAt(i);
}
\`\`\`

**Через char масив (ефективніше):**

\`\`\`java
char[] chars = original.toCharArray();
int left = 0, right = chars.length - 1;

while (left < right) {
    char temp = chars[left];
    chars[left] = chars[right];
    chars[right] = temp;
    left++;
    right--;
}

String reversed = new String(chars);
\`\`\`

**Через Stream (Java 8+):**

\`\`\`java
String reversed = original.chars()
    .mapToObj(c -> (char) c)
    .reduce("", (s, c) -> c + s, (s1, s2) -> s2 + s1);
\`\`\`

**Рекурсивний спосіб:**

\`\`\`java
public String reverse(String str) {
    if (str.isEmpty()) {
        return str;
    }
    return reverse(str.substring(1)) + str.charAt(0);
}
\`\`\`

**Performance:** StringBuilder.reverse() - найшвидший O(n), конкатенація через + - найповільніша O(n²).`
        },
        {
          question: 'Перевірити чи є рядок паліндромом',
          answer: `**Базова перевірка:**

\`\`\`java
public boolean isPalindrome(String str) {
    // Очистити від спецсимволів та привести до нижнього регістру
    String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

    // Перевернути рядок
    String reversed = new StringBuilder(cleaned).reverse().toString();

    // Порівняти
    return cleaned.equals(reversed);
}

// Приклади:
isPalindrome("A man a plan a canal Panama");  // true
isPalindrome("race a car");                    // false
isPalindrome("Was it a car or a cat I saw?"); // true
\`\`\`

**Без реверсу (two pointers):**

\`\`\`java
public boolean isPalindrome(String str) {
    String cleaned = str.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();

    int left = 0;
    int right = cleaned.length() - 1;

    while (left < right) {
        if (cleaned.charAt(left) != cleaned.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}
\`\`\`

**Рекурсивний підхід:**

\`\`\`java
public boolean isPalindromeRecursive(String str, int left, int right) {
    if (left >= right) {
        return true;
    }
    if (str.charAt(left) != str.charAt(right)) {
        return false;
    }
    return isPalindromeRecursive(str, left + 1, right - 1);
}
\`\`\``
        },
        {
          question: 'Знайти частоту кожного символу в рядку',
          answer: `**Через Stream та groupingBy:**

\`\`\`java
String str = "hello world";

Map<Character, Long> frequency = str.chars()
    .mapToObj(c -> (char) c)
    .collect(Collectors.groupingBy(
        Function.identity(),
        Collectors.counting()
    ));

// Результат: {h=1, e=1, l=3, o=2, w=1, r=1, d=1, ' '=1}
\`\`\`

**Через HashMap (традиційний спосіб):**

\`\`\`java
Map<Character, Integer> frequency = new HashMap<>();

for (char c : str.toCharArray()) {
    frequency.put(c, frequency.getOrDefault(c, 0) + 1);
}
\`\`\`

**Через compute:**

\`\`\`java
Map<Character, Integer> frequency = new HashMap<>();

for (char c : str.toCharArray()) {
    frequency.compute(c, (key, val) -> (val == null) ? 1 : val + 1);
}
\`\`\`

**Відсортувати по частоті:**

\`\`\`java
Map<Character, Long> sorted = frequency.entrySet().stream()
    .sorted(Map.Entry.<Character, Long>comparingByValue().reversed())
    .collect(Collectors.toMap(
        Map.Entry::getKey,
        Map.Entry::getValue,
        (e1, e2) -> e1,
        LinkedHashMap::new
    ));
\`\`\`

**Знайти найчастіший символ:**

\`\`\`java
Character mostFrequent = frequency.entrySet().stream()
    .max(Map.Entry.comparingByValue())
    .map(Map.Entry::getKey)
    .orElse(null);
\`\`\``
        },
        {
          question: 'Об\'єднати два відсортованих масиви',
          answer: `**Two pointers підхід (зберігає сортування):**

\`\`\`java
public int[] mergeSortedArrays(int[] arr1, int[] arr2) {
    int[] merged = new int[arr1.length + arr2.length];
    int i = 0;  // Pointer для arr1
    int j = 0;  // Pointer для arr2
    int k = 0;  // Pointer для merged

    // Порівнюємо елементи та додаємо менший
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            merged[k++] = arr1[i++];
        } else {
            merged[k++] = arr2[j++];
        }
    }

    // Додати залишок з arr1
    while (i < arr1.length) {
        merged[k++] = arr1[i++];
    }

    // Додати залишок з arr2
    while (j < arr2.length) {
        merged[k++] = arr2[j++];
    }

    return merged;
}

// Приклад:
// arr1 = [1, 3, 5, 7]
// arr2 = [2, 4, 6, 8]
// merged = [1, 2, 3, 4, 5, 6, 7, 8]
\`\`\`

**Через Stream (простіше, але втрачаємо ефективність):**

\`\`\`java
int[] merged = IntStream.concat(
    Arrays.stream(arr1),
    Arrays.stream(arr2)
).sorted().toArray();
\`\`\`

**Complexity:** Two pointers - O(n+m) time, O(n+m) space. Stream - O((n+m)log(n+m)) через sorting.`
        },
        {
          question: 'FlatMap приклад використання',
          answer: `**Перетворення списку списків в один список:**

\`\`\`java
List<List<Integer>> listOfLists = Arrays.asList(
    Arrays.asList(1, 2, 3),
    Arrays.asList(4, 5),
    Arrays.asList(6, 7, 8, 9)
);

List<Integer> flatList = listOfLists.stream()
    .flatMap(List::stream)
    .collect(Collectors.toList());

// Результат: [1, 2, 3, 4, 5, 6, 7, 8, 9]
\`\`\`

**Отримати всі email з списку департаментів:**

\`\`\`java
List<Department> departments = getDepartments();

List<String> allEmails = departments.stream()
    .flatMap(dept -> dept.getEmployees().stream())
    .map(Employee::getEmail)
    .collect(Collectors.toList());
\`\`\`

**Розбити рядки на слова:**

\`\`\`java
List<String> sentences = Arrays.asList(
    "Hello world",
    "Java streams",
    "FlatMap example"
);

List<String> words = sentences.stream()
    .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
    .collect(Collectors.toList());

// Результат: ["Hello", "world", "Java", "streams", "FlatMap", "example"]
\`\`\`

**Отримати всі символи з рядків:**

\`\`\`java
List<String> words = Arrays.asList("Hello", "World");

List<String> chars = words.stream()
    .flatMap(word -> Arrays.stream(word.split("")))
    .distinct()
    .collect(Collectors.toList());

// Результат: ["H", "e", "l", "o", "W", "r", "d"]
\`\`\`

**Ключова різниця:** map() повертає Stream<Stream<T>>, flatMap() повертає Stream<T> (розгортає вкладені структури).`
        }
      ]
    },
    {
      id: 'mobile',
      title: 'Mobile Automation',
      emoji: '📱',
      description: 'Appium Overview',
      questions: [
        {
          question: 'Що таке Appium?',
          answer: `**Appium** - це open-source інструмент для автоматизації мобільних застосунків.

**Основні можливості:**
- Підтримка iOS та Android платформ
- Тестування нативних, гібридних та веб додатків
- Використання WebDriver протоколу
- Не потребує модифікації коду додатку
- Підтримка різних мов програмування (Java, Python, JavaScript, Ruby)

**Архітектура:**
- **Client-Server** модель
- Appium Server отримує команди від test scripts
- Передає команди до UIAutomator2 (Android) або XCUITest (iOS)
- Виконує дії на реальному пристрої або емуляторі

**Переваги:**
- Один API для різних платформ
- Cross-platform тестування
- Використання стандартних Selenium WebDriver API
- Велика спільнота та документація

**Підтримувані типи додатків:**
- Native apps (написані на platform-specific SDK)
- Hybrid apps (WebView + Native)
- Mobile web apps (Safari, Chrome на мобільних)`
        },
        {
          question: 'Основні компоненти Appium',
          answer: `**1. Appium Server:**
- Node.js сервер що обробляє HTTP запити
- Приймає команди від test scripts
- Маршрутизує до відповідного драйвера
- Запускається через \`appium\` команду або Appium Desktop

**2. Appium Client Libraries:**
- Java, Python, JavaScript, Ruby, C# бібліотеки
- Надають WebDriver API для написання тестів
- Dependency: \`io.appium:java-client\`

**3. Appium Desktop (Appium Inspector):**
- GUI додаток для інспектування елементів
- Показує ієрархію view елементів
- Допомагає знаходити локатори
- Генерує sample code для взаємодії

**4. Mobile Drivers:**
- **UIAutomator2** - для Android (Google офіційний framework)
- **XCUITest** - для iOS (Apple офіційний framework)
- Espresso, Flutter - альтернативні драйвери

**5. Device/Emulator:**
- Реальні пристрої через USB/WiFi
- Android Emulator (AVD)
- iOS Simulator (тільки на Mac)

**Процес взаємодії:**
Test Script → Appium Client → Appium Server → Driver → Device/Emulator`
        },
        {
          question: 'Desired Capabilities для Android',
          answer: `**DesiredCapabilities** - конфігурація для Appium сесії:

\`\`\`java
DesiredCapabilities caps = new DesiredCapabilities();

// Платформа
caps.setCapability("platformName", "Android");
caps.setCapability("platformVersion", "11.0");
caps.setCapability("deviceName", "Pixel_4_API_30");

// Додаток
caps.setCapability("app", "/path/to/app.apk");
// АБО для вже встановленого додатку:
caps.setCapability("appPackage", "com.example.myapp");
caps.setCapability("appActivity", ".MainActivity");

// Автоматизація
caps.setCapability("automationName", "UiAutomator2");

// Додаткові налаштування
caps.setCapability("noReset", true);  // Не очищати app data
caps.setCapability("fullReset", false); // Не перевстановлювати app
caps.setCapability("autoGrantPermissions", true); // Auto-grant permissions

// Створення драйвера
AndroidDriver driver = new AndroidDriver(
    new URL("http://127.0.0.1:4723/wd/hub"),
    caps
);
\`\`\`

**Важливі capabilities:**
- **platformName** - "Android" або "iOS"
- **automationName** - "UiAutomator2" (рекомендовано для Android)
- **app** - шлях до .apk файлу
- **appPackage** + **appActivity** - для запуску існуючого app
- **deviceName** - назва пристрою/емулятора
- **noReset** - зберегти app state між сесіями`
        },
        {
          question: 'Типи локаторів в Appium',
          answer: `**1. ID (Resource ID для Android):**

\`\`\`java
driver.findElement(By.id("com.example.app:id/loginButton"));
// Найшвидший та найнадійніший
\`\`\`

**2. Accessibility ID (content-desc для Android, accessibility id для iOS):**

\`\`\`java
driver.findElement(MobileBy.AccessibilityId("LoginButton"));
// Cross-platform локатор
\`\`\`

**3. XPath:**

\`\`\`java
driver.findElement(By.xpath("//android.widget.Button[@text='Login']"));
// Потужний, але повільний
\`\`\`

**4. Class Name:**

\`\`\`java
driver.findElement(By.className("android.widget.EditText"));
// Знаходить по класу елемента
\`\`\`

**5. UIAutomator (тільки Android):**

\`\`\`java
driver.findElement(MobileBy.AndroidUIAutomator(
    "new UiSelector().text(\\"Login\\")"
));

// З resourceId
driver.findElement(MobileBy.AndroidUIAutomator(
    "new UiSelector().resourceId(\\"com.app:id/button\\")"
));

// Комбінований
driver.findElement(MobileBy.AndroidUIAutomator(
    "new UiSelector().className(\\"android.widget.Button\\").textContains(\\"Submit\\")"
));
\`\`\`

**6. iOS Predicate String (тільки iOS):**

\`\`\`java
driver.findElement(MobileBy.iOSNsPredicateString(
    "type == 'XCUIElementTypeButton' AND name == 'Login'"
));
\`\`\`

**Best Practice:** Пріоритет - id > AccessibilityId > UIAutomator > xpath`
        },
        {
          question: 'Жести в мобільній автоматизації',
          answer: `**TouchAction для простих жестів:**

\`\`\`java
TouchAction action = new TouchAction(driver);

// Tap (клік)
action.tap(tapOptions().withElement(element(loginBtn))).perform();

// Long Press (довге натискання)
action.longPress(longPressOptions()
    .withElement(element(imageElement))
    .withDuration(Duration.ofSeconds(2)))
    .release()
    .perform();

// Swipe (свайп)
action.press(point(500, 1000))
    .waitAction(waitOptions(Duration.ofMillis(500)))
    .moveTo(point(500, 300))
    .release()
    .perform();
\`\`\`

**Scroll (прокрутка):**

\`\`\`java
// Android UIAutomator scroll
driver.findElement(MobileBy.AndroidUIAutomator(
    "new UiScrollable(new UiSelector().scrollable(true))" +
    ".scrollIntoView(new UiSelector().text(\\"Element Text\\"))"
));

// Програмна прокрутка
((JavascriptExecutor) driver).executeScript(
    "mobile: scroll",
    ImmutableMap.of("direction", "down")
);
\`\`\`

**SwipeActions (helper method):**

\`\`\`java
public void swipeLeft() {
    Dimension size = driver.manage().window().getSize();
    int startX = (int) (size.width * 0.8);
    int endX = (int) (size.width * 0.2);
    int startY = size.height / 2;

    new TouchAction(driver)
        .press(point(startX, startY))
        .waitAction(waitOptions(Duration.ofMillis(500)))
        .moveTo(point(endX, startY))
        .release()
        .perform();
}
\`\`\`

**Pinch/Zoom (MultiTouchAction):**

\`\`\`java
MultiTouchAction multiTouch = new MultiTouchAction(driver);
TouchAction finger1 = new TouchAction(driver);
TouchAction finger2 = new TouchAction(driver);

finger1.press(point(x1, y1)).moveTo(point(x2, y2)).release();
finger2.press(point(x3, y3)).moveTo(point(x4, y4)).release();

multiTouch.add(finger1).add(finger2).perform();
\`\`\``
        },
        {
          question: 'Різниця між Android і iOS автоматизації',
          answer: `**Android:**

**Технології:**
- UIAutomator2 (рекомендовано) або Espresso
- Java/Kotlin для app розробки
- .apk файл для встановлення

**Налаштування:**
- Android SDK required
- ADB (Android Debug Bridge) для device management
- Працює на Windows, Mac, Linux
- USB або WiFi підключення
- AVD (Android Virtual Device) емулятор

**Команди:**

\`\`\`bash
adb devices                    # Список пристроїв
adb install app.apk           # Встановити app
adb shell pm list packages    # Список packages
adb logcat                    # Логи додатку
\`\`\`

---

**iOS:**

**Технології:**
- XCUITest (офіційний Apple framework)
- Swift/Objective-C для app розробки
- .app або .ipa файл

**Налаштування:**
- Тільки на macOS
- Xcode required (обов'язково!)
- iOS Simulator (безкоштовно)
- Real device потребує Apple Developer account
- Provisioning profiles для testing
- WebDriverAgent для Appium

**Складнощі iOS:**
- Більш закрита екосистема
- Потребує Mac
- Provisioning та certificates
- Реальні пристрої складніше налаштувати

**Спільне:**
- WebDriver protocol
- Appium Client API однаковий
- Cross-platform test scripts (з різними capabilities)`
        },
        {
          question: 'Як перемикатися між Native та WebView?',
          answer: `**Context Switching для гібридних додатків:**

**1. Отримати всі доступні contexts:**

\`\`\`java
Set<String> contexts = driver.getContextHandles();

for (String context : contexts) {
    System.out.println(context);
}

// Output:
// NATIVE_APP
// WEBVIEW_com.example.myapp
// WEBVIEW_chrome
\`\`\`

**2. Переключення на WebView context:**

\`\`\`java
// Переключитись на WebView
driver.context("WEBVIEW_com.example.myapp");

// Тепер можна використовувати web locators
driver.findElement(By.id("username")).sendKeys("test@example.com");
driver.findElement(By.name("password")).sendKeys("password123");
driver.findElement(By.cssSelector("button[type='submit']")).click();
\`\`\`

**3. Повернення на Native context:**

\`\`\`java
// Переключитись назад на Native
driver.context("NATIVE_APP");

// Тепер працюють тільки mobile locators
driver.findElement(By.id("com.app:id/backButton")).click();
\`\`\`

**Helper method для автоматичного переключення:**

\`\`\`java
public void switchToWebView() {
    Set<String> contexts = driver.getContextHandles();
    for (String context : contexts) {
        if (context.contains("WEBVIEW")) {
            driver.context(context);
            break;
        }
    }
}

public void switchToNative() {
    driver.context("NATIVE_APP");
}
\`\`\`

**Коли використовувати:**
- Гібридні додатки з WebView компонентами
- Embedded web content в native app
- Login через web форму в мобільному додатку`
        },
        {
          question: 'Що таке Appium Inspector?',
          answer: `**Appium Inspector** - GUI інструмент для інспектування мобільних додатків.

**Основні функції:**

**1. Візуалізація UI:**
- Screenshot поточного екрану
- Інтерактивне виділення елементів
- Ієрархія view elements (DOM tree)

**2. Інформація про елементи:**
- **resource-id** - унікальний ID (Android)
- **text** - видимий текст
- **content-desc** - accessibility опис
- **class** - тип елемента (Button, TextView, EditText)
- **package** - назва пакету додатку
- **bounds** - координати елемента
- **clickable, enabled, focused** - стан елемента

**3. Генерація коду:**
- Автоматична генерація локаторів
- Sample code для Java, Python, JavaScript
- Copy локатор одним кліком

**4. Тестування локаторів:**
- Find Element функція
- Перевірка чи працює локатор
- Виділення знайденого елемента на екрані

**Як використовувати:**

\`\`\`
1. Запустити Appium Server
2. Відкрити Appium Inspector
3. Вказати Desired Capabilities
4. Start Session
5. Інспектувати елементи
6. Копіювати локатори в test код
\`\`\`

**Аналоги:**
- uiautomatorviewer (Android SDK tools)
- Xcode Accessibility Inspector (для iOS)

**Best Practice:** Використовувати Inspector для пошуку локаторів та розуміння app структури перед написанням автотестів.`
        },
        {
          question: 'Основні команди для роботи з додатком',
          answer: `**Встановлення та видалення:**

\`\`\`java
// Встановити додаток
driver.installApp("/path/to/app.apk");

// Перевірити чи встановлений
boolean isInstalled = driver.isAppInstalled("com.example.app");

// Видалити додаток
driver.removeApp("com.example.app");
\`\`\`

**Запуск та закриття:**

\`\`\`java
// Запустити додаток (якщо зупинений)
driver.launchApp();

// Активувати додаток (bring to foreground)
driver.activateApp("com.example.app");

// Закрити додаток (але не видаляти)
driver.closeApp();

// Повністю зупинити додаток
driver.terminateApp("com.example.app");
\`\`\`

**Background operations:**

\`\`\`java
// Перевести додаток в background на 5 секунд
driver.runAppInBackground(Duration.ofSeconds(5));

// Перевірити стан додатку
ApplicationState state = driver.queryAppState("com.example.app");
// NOT_INSTALLED, NOT_RUNNING, RUNNING_IN_BACKGROUND, RUNNING_IN_FOREGROUND
\`\`\`

**Reset та clear:**

\`\`\`java
// Очистити app data (як uninstall + install)
driver.resetApp();
\`\`\`

**Отримання app інформації:**

\`\`\`java
// Поточний package
String currentPackage = driver.getCurrentPackage();

// Поточна activity
String currentActivity = driver.currentActivity();
\`\`\`

**Приклад scenario:**

\`\`\`java
// Встановити і запустити
driver.installApp("/path/to/app.apk");
driver.activateApp("com.example.app");

// Тестування...

// Закрити та видалити
driver.terminateApp("com.example.app");
driver.removeApp("com.example.app");
\`\`\``
        }
      ]
    }
  ]
};
