import { useEffect, useRef, useState, type ReactNode } from "react";

type IconName =
  | "home"
  | "exchange"
  | "activity"
  | "user"
  | "arrow"
  | "chevron"
  | "bell"
  | "plus"
  | "close"
  | "check"
  | "shield"
  | "globe"
  | "phone"
  | "wallet"
  | "help"
  | "logout"
  | "sun"
  | "moon"
  | "lock"
  | "search"
  | "clock"
  | "copy"
  | "eye"
  | "mail"
  | "document"
  | "camera"
  | "download"
  | "info"
  | "external";
function Icon({
  name,
  size = 20,
  ...props
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const paths: Record<IconName, ReactNode> = {
    home: (
      <>
        <path d="m3 10 9-7 9 7v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z" />
      </>
    ),
    exchange: (
      <>
        <path d="M4 7h15m-4-4 4 4-4 4M20 17H5m4-4-4 4 4 4" />
      </>
    ),
    activity: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="4" />
        <path d="M9 8h6M9 12h6M9 16h3" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21v-2a8 8 0 0 1 16 0v2" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    shield: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    phone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="3" />
        <path d="M10 18h4" />
      </>
    ),
    wallet: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="3" />
        <path d="M3 8V5a2 2 0 0 1 2-2h12M21 11h-6v5h6" />
        <path d="M17 13.5h.01" />
      </>
    ),
    help: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9 9a3 3 0 1 1 4 3c-1 .5-1 1-1 2M12 17h.01" />
      </>
    ),
    logout: (
      <>
        <path d="M9 4H5v16h4M10 12h11m-4-4 4 4-4 4" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1" />
      </>
    ),
    moon: <path d="M21 13a9 9 0 0 1-10-10A9 9 0 1 0 21 13Z" />,
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="3" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="12" height="13" rx="2" />
        <path d="M15 8V3H3v13h5" />
      </>
    ),
    eye: (
      <>
        <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),
    document: (
      <>
        <path d="M14 3H5v18h14V8zM14 3v5h5M8 12h8M8 16h5" />
      </>
    ),
    camera: (
      <>
        <rect x="3" y="6" width="18" height="14" rx="3" />
        <path d="m8 6 2-3h4l2 3" />
        <circle cx="12" cy="13" r="4" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />
      </>
    ),
    info: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v6m0-10h.01" />
      </>
    ),
    external: (
      <>
        <path d="M14 3h7v7m0-7L10 14M10 4H4v16h16v-6" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
function Logo({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand ${small ? "brand-small" : ""}`}>
      <svg viewBox="0 0 40 40" fill="none">
        <path
          d="M5 30V13a8 8 0 0 1 14-5l16 20"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M35 10v17a8 8 0 0 1-14 5L5 12"
          stroke="currentColor"
          strokeWidth="7"
          strokeLinecap="round"
        />
      </svg>
      {!small && (
        <span>
          neexa<span className="brand-dot">.</span>
        </span>
      )}
    </span>
  );
}
const countries = [
  {
    name: "Bénin",
    en: "Benin",
    flag: "🇧🇯",
    code: "+229",
    currency: "XOF",
    operators: ["MTN MoMo", "Moov Money"],
  },
  {
    name: "Côte d’Ivoire",
    en: "Côte d’Ivoire",
    flag: "🇨🇮",
    code: "+225",
    currency: "XOF",
    operators: ["Orange Money", "MTN MoMo", "Moov Money", "Wave"],
  },
  {
    name: "Sénégal",
    en: "Senegal",
    flag: "🇸🇳",
    code: "+221",
    currency: "XOF",
    operators: ["Orange Money", "Wave"],
  },
  {
    name: "Cameroun",
    en: "Cameroon",
    flag: "🇨🇲",
    code: "+237",
    currency: "XAF",
    operators: ["MTN MoMo", "Orange Money"],
  },
  {
    name: "Ghana",
    en: "Ghana",
    flag: "🇬🇭",
    code: "+233",
    currency: "GHS",
    operators: ["MTN MoMo"],
  },
  {
    name: "Nigeria",
    en: "Nigeria",
    flag: "🇳🇬",
    code: "+234",
    currency: "NGN",
    operators: [] as string[],
  },
  {
    name: "Kenya",
    en: "Kenya",
    flag: "🇰🇪",
    code: "+254",
    currency: "KES",
    operators: ["M-Pesa", "Airtel Money"],
  },
  {
    name: "Afrique du Sud",
    en: "South Africa",
    flag: "🇿🇦",
    code: "+27",
    currency: "ZAR",
    operators: [] as string[],
  },
];
const assets = [
  { symbol: "USDT", name: "Tether", sign: "₮", color: "#24a382" },
  { symbol: "USDC", name: "USD Coin", sign: "$", color: "#2775ca" },
  { symbol: "BTC", name: "Bitcoin", sign: "₿", color: "#ef9635" },
  { symbol: "ETH", name: "Ethereum", sign: "Ξ", color: "#7486b7" },
];
type Request = {
  id: string;
  amount: string;
  reverse: boolean;
  asset: string;
  currency: string;
  operator: string;
  date: Date;
};
type Tab = "home" | "exchange" | "activity" | "profile";
type Modal =
  | null
  | "welcome"
  | "country"
  | "asset"
  | "currency"
  | "notifications"
  | "auth"
  | "kyc"
  | "review"
  | "success"
  | "detail"
  | "info"
  | "payment"
  | "edit"
  | "security";

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("neexa-lang") || "fr");
  const [dark, setDark] = useState(() => localStorage.getItem("neexa-theme") === "dark");
  const tr = (fr: string, en: string) => (lang === "fr" ? fr : en);
  const [tab, setTab] = useState<Tab>("home");
  const [selectedModal, setModal] = useState<Modal>(null);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [countryIndex, setCountryIndex] = useState(0);
  const country = countries[countryIndex];
  const [currency, setCurrency] = useState("XOF");
  const [assetIndex, setAssetIndex] = useState(0);
  const asset = assets[assetIndex];
  const [reverse, setReverse] = useState(false);
  const [amount, setAmount] = useState("");
  const [operator, setOperator] = useState("MTN MoMo");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [formError, setFormError] = useState("");
  const [requests, setRequests] = useState<Request[]>([]);
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [toast, setToast] = useState("");
  const [authMode, setAuthMode] = useState("signup");
  const [authStep, setAuthStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  const modal = selectedModal ?? (signedIn ? null : "welcome");
  const [kycStep, setKycStep] = useState(0);
  const [kycPreview, setKycPreview] = useState(false);
  const [docType, setDocType] = useState("id");
  const [docFront, setDocFront] = useState("");
  const [docBack, setDocBack] = useState("");
  const [info, setInfo] = useState({ title: "", content: "" });
  const [notifications, setNotifications] = useState(true);
  const [activityState, setActivityState] = useState("normal");
  const dialogRef = useRef<HTMLElement>(null);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "fr" ? "NEEXA — Votre monde, en mouvement" : "NEEXA — Your world, in motion";
  }, [lang]);
  useEffect(() => {
    if (!modal) return;
    const previousFocus = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModal(null);
        setFormError("");
      }
      if (event.key !== "Tab") return;
      const elements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not(:disabled), input:not(:disabled), select, summary, [tabindex="0"]',
      );
      if (!elements?.length) return;
      const first = elements[0],
        last = elements[elements.length - 1];
      if (
        event.shiftKey &&
        (document.activeElement === first || document.activeElement === dialogRef.current)
      ) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      previousFocus?.focus();
    };
  }, [modal]);
  const notify = (text: string) => {
    setToast(text);
    window.setTimeout(() => setToast(""), 4200);
  };
  const showInfo = (title: string, content: string) => {
    setInfo({ title, content });
    setModal("info");
  };
  const go = (next: Tab) => {
    setTab(next);
    setFormError("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const changeLanguage = (value: string) => {
    setLang(value);
    localStorage.setItem("neexa-lang", value);
    setLanguageMenu(false);
  };
  const changeTheme = () => {
    setDark(!dark);
    localStorage.setItem("neexa-theme", !dark ? "dark" : "light");
  };
  const startAuth = (mode: string) => {
    setAuthMode(mode);
    setAuthStep(0);
    setFormError("");
    setPassword("");
    setModal("auth");
  };
  const countryName = (c = country) => (lang === "fr" ? c.name : c.en);
  const money = (value: string, code: string) =>
    new Intl.NumberFormat(lang === "fr" ? "fr-FR" : "en-GB", {
      maximumFractionDigits: code === "XOF" || code === "XAF" ? 0 : 2,
    }).format(Number(value)) +
    " " +
    code;
  const nav: { id: Tab; fr: string; en: string; icon: IconName }[] = [
    { id: "home", fr: "Accueil", en: "Home", icon: "home" },
    { id: "exchange", fr: "Échange", en: "Exchange", icon: "exchange" },
    { id: "activity", fr: "Activité", en: "Activity", icon: "activity" },
    { id: "profile", fr: "Profil", en: "Profile", icon: "user" },
  ];
  const closeModal = () => {
    setModal(null);
    setFormError("");
  };
  const pill = (
    <span className="demo-label">
      <span />
      {tr("Mode découverte", "Explore mode")}
    </span>
  );
  const primary = (label: ReactNode, click?: () => void, extra = "") => (
    <button className={`button primary ${extra}`} onClick={click}>
      {label}
      <Icon name="arrow" size={18} />
    </button>
  );
  const openReview = () => {
    if (!amount || Number(amount) <= 0) {
      setFormError(
        tr("Saisissez un montant supérieur à zéro.", "Enter an amount greater than zero."),
      );
      return;
    }
    setFormError("");
    setModal("payment");
  };
  const switchDirection = () => {
    setReverse(!reverse);
    setAmount("");
    setFormError("");
  };
  const converter = (full = false) => (
    <div className={`converter panel ${full ? "converter-full" : ""}`}>
      <div className="section-heading">
        <h2>{tr("On échange ?", "Ready to exchange?")}</h2>
        <span className="small-icon">
          <Icon name="exchange" size={18} />
        </span>
      </div>
      <p className="card-description">
        {tr(
          "De nouvelles possibilités, dans les deux sens.",
          "New possibilities, in both directions.",
        )}
      </p>
      {full && (
        <button className="exchange-country" onClick={() => setModal("country")}>
          <span>
            {country.flag} {countryName()}
          </span>
          <span>
            {tr("Changer de pays", "Change country")} <Icon name="chevron" size={14} />
          </span>
        </button>
      )}
      <div className="exchange-fields">
        <div className="amount-block">
          <label htmlFor={full ? "amount-full" : "amount"}>{tr("VOUS DONNEZ", "YOU GIVE")}</label>
          <div className="amount-row">
            <input
              id={full ? "amount-full" : "amount"}
              aria-label={tr("Montant donné", "Amount to give")}
              type="number"
              min="0"
              step="any"
              placeholder="0"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setFormError("");
              }}
            />
            <button
              className="asset-select"
              onClick={() => setModal(reverse ? "asset" : "currency")}
            >
              <span
                className={`coin ${reverse ? "" : "local-coin"}`}
                style={reverse ? { background: asset.color } : {}}
              >
                {reverse ? (
                  asset.sign
                ) : (
                  <span className="benin-mini">
                    {currency === "XOF" ? "CFA" : currency.slice(0, 1)}
                  </span>
                )}
              </span>
              {reverse ? asset.symbol : currency}
              <Icon name="chevron" size={13} />
            </button>
          </div>
          <span className="field-hint">
            {reverse
              ? asset.name
              : tr("Franc CFA · Mobile Money", "CFA franc · Mobile Money")
                  .replace(
                    "Franc CFA",
                    currency === "XOF" || currency === "XAF" ? "Franc CFA" : currency,
                  )
                  .replace(
                    "CFA franc",
                    currency === "XOF" || currency === "XAF" ? "CFA franc" : currency,
                  )}
          </span>
        </div>
        <div className="swap-line">
          <span />
          <button
            className="swap-button"
            onClick={switchDirection}
            aria-label={tr("Inverser le sens de l’échange", "Reverse exchange direction")}
          >
            <Icon name="exchange" size={19} />
          </button>
          <span />
        </div>
        <div className="amount-block receive">
          <label>{tr("VOUS RECEVEZ", "YOU RECEIVE")}</label>
          <div className="amount-row">
            <span className="receive-value">
              —<span>{tr("À confirmer", "To be confirmed")}</span>
            </span>
            <button
              className="asset-select"
              onClick={() => setModal(reverse ? "currency" : "asset")}
            >
              <span
                className={`coin ${reverse ? "local-coin" : ""}`}
                style={!reverse ? { background: asset.color } : {}}
              >
                {reverse ? "CFA" : asset.sign}
              </span>
              {reverse ? currency : asset.symbol}
              <Icon name="chevron" size={13} />
            </button>
          </div>
          <span className="field-hint">
            {reverse
              ? tr("Sur votre compte Mobile Money", "To your Mobile Money account")
              : `${asset.name} · ${tr("Actif numérique", "Digital asset")}`}
          </span>
        </div>
      </div>
      {formError && !modal && (
        <p className="error-text" role="alert">
          {formError}
        </p>
      )}
      <div className="rate-note">
        <Icon name="info" size={14} />
        <span>
          {tr(
            "Taux et frais confirmés avant toute opération.",
            "Rates and fees confirmed before any transaction.",
          )}
        </span>
      </div>
      {primary(
        tr("Préparer mon échange", "Prepare my exchange"),
        () => (full ? openReview() : go("exchange")),
        "full-width",
      )}
      <div className="secure-caption">
        <Icon name="lock" size={12} />
        {tr("Sans engagement. Vous gardez le contrôle.", "No commitment. You stay in control.")}
      </div>
    </div>
  );
  const emptyActivity = (
    <div className="empty-activity">
      <div className="empty-art">
        <span />
        <Icon name="activity" size={28} />
        <span />
      </div>
      <h3>
        {tr("Tout commence par un premier échange.", "It all starts with your first exchange.")}
      </h3>
      <p>
        {tr(
          "Vos demandes et leur suivi apparaîtront ici.",
          "Your requests and their progress will appear here.",
        )}
      </p>
      <button className="text-button" onClick={() => go("exchange")}>
        {tr("Découvrir l’échange", "Explore exchange")}
        <Icon name="arrow" size={16} />
      </button>
    </div>
  );
  const requestList = (limit?: number) => {
    const list = requests
      .filter(
        (r) =>
          `${r.id} ${r.asset} ${r.currency} ${r.amount}`
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (filter === "all" || filter === "pending"),
      )
      .slice(0, limit);
    return list.length ? (
      <div className="request-list">
        {list.map((r) => (
          <button
            key={r.id}
            className="request-row"
            onClick={() => {
              setSelectedRequest(r);
              setModal("detail");
            }}
          >
            <span className="request-icon">
              <Icon name="exchange" />
            </span>
            <span className="request-main">
              <strong>
                {r.reverse ? `${r.asset} → ${r.currency}` : `${r.currency} → ${r.asset}`}
              </strong>
              <small>
                {r.date.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB", {
                  day: "numeric",
                  month: "short",
                  hour: "2-digit",
                  minute: "2-digit",
                })}{" "}
                · {r.id}
              </small>
            </span>
            <span className="request-end">
              <strong>{money(r.amount, r.reverse ? r.asset : r.currency)}</strong>
              <small className="status-badge">{tr("Simulation", "Simulation")}</small>
            </span>
            <Icon name="chevron" size={16} />
          </button>
        ))}
      </div>
    ) : query || filter !== "all" ? (
      <div className="empty-activity compact-empty">
        <Icon name="search" size={30} />
        <h3>{tr("Aucun résultat", "No results")}</h3>
        <p>
          {tr("Essayez un autre filtre ou une autre recherche.", "Try another filter or search.")}
        </p>
        <button
          className="text-button"
          onClick={() => {
            setFilter("all");
            setQuery("");
          }}
        >
          {tr("Réinitialiser", "Reset")}
        </button>
      </div>
    ) : (
      emptyActivity
    );
  };
  const settingRow = (
    icon: IconName,
    title: string,
    action: () => void,
    subtitle?: string,
    end?: ReactNode,
  ) => (
    <button className="setting-row" onClick={action}>
      <span className="setting-icon">
        <Icon name={icon} />
      </span>
      <span>
        <strong>{title}</strong>
        {subtitle && <small>{subtitle}</small>}
      </span>
      {end || <Icon name="chevron" size={16} />}
    </button>
  );
  const authSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    if (
      ((authMode === "signup" && authStep > 0) || (authMode === "reset" && authStep === 1)) &&
      new FormData(event.currentTarget).get("otp") !== "123456"
    ) {
      setFormError(
        tr(
          "Pour cette démonstration, le code est 123456.",
          "For this demonstration, the code is 123456.",
        ),
      );
      return;
    }
    if ((authMode === "signup" && authStep === 0) || (authMode === "reset" && authStep === 2)) {
      const form = new FormData(event.currentTarget);
      if (password.length < 8 || !/[0-9]/.test(password) || !/[A-Z]/.test(password)) {
        setFormError(
          tr(
            "Utilisez au moins 8 caractères, une majuscule et un chiffre.",
            "Use at least 8 characters, one uppercase letter and one number.",
          ),
        );
        return;
      }
      if (form.get("confirm") !== password) {
        setFormError(tr("Les mots de passe ne correspondent pas.", "Passwords do not match."));
        return;
      }
    }
    if (authMode === "login") {
      setSignedIn(true);
      go("home");
      closeModal();
      notify(
        tr(
          "Session de démonstration ouverte. Aucun compte réel connecté.",
          "Demo session opened. No real account connected.",
        ),
      );
    } else setAuthStep(authStep + 1);
  };
  const authTitle =
    authMode === "login"
      ? tr("Heureux de vous retrouver.", "Good to see you again.")
      : authMode === "reset"
        ? [
            tr("Un nouveau départ.", "A fresh start."),
            tr("Vérifiez votre e-mail", "Check your email"),
            tr("Votre nouveau mot de passe", "Your new password"),
            tr("Vous voilà prêt.", "You’re all set."),
          ][Math.min(authStep, 3)]
        : [
            tr("Votre avenir commence ici.", "Your future starts here."),
            tr("Vérifiez votre e-mail", "Check your email"),
            tr("Vérifiez votre numéro", "Verify your number"),
            tr("Bienvenue chez NEEXA.", "Welcome to NEEXA."),
          ][Math.min(authStep, 3)];
  const modalTitle =
    modal === "country"
      ? tr("Un continent, des possibilités.", "One continent, endless possibilities.")
      : modal === "asset"
        ? tr("Choisir un actif numérique", "Choose a digital asset")
        : modal === "currency"
          ? tr("Choisir une devise", "Choose a currency")
          : modal === "notifications"
            ? tr("Vos notifications", "Your notifications")
            : modal === "auth"
              ? authTitle
              : modal === "kyc"
                ? tr("Vérification d’identité", "Identity verification")
                : modal === "payment"
                  ? tr(
                      reverse ? "Comment recevoir vos fonds ?" : "Comment régler votre échange ?",
                      reverse ? "How would you like to receive?" : "How would you like to pay?",
                    )
                  : modal === "review"
                    ? tr("Tout est bien correct ?", "Does everything look right?")
                    : modal === "success"
                      ? tr("Votre simulation est prête.", "Your simulation is ready.")
                      : modal === "detail"
                        ? tr("Suivi de la demande", "Request progress")
                        : modal === "edit"
                          ? tr("Votre profil, à jour.", "Your profile, up to date.")
                          : modal === "security"
                            ? tr("Votre sécurité", "Your security")
                            : info.title;

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      {signedIn && (
        <>
          <aside className="sidebar">
            <button className="brand-button" onClick={() => setModal("welcome")} aria-label="NEEXA">
              <Logo />
            </button>
            <div className="sidebar-workspace">
              <span className="workspace-icon">
                <Icon name="wallet" size={18} />
              </span>
              <div>
                <strong>{tr("Espace personnel", "Personal space")}</strong>
                <span>{tr("Tout commence avec vous.", "It all starts with you.")}</span>
              </div>
              <span className="workspace-dot" />
            </div>
            <span className="nav-label">{tr("VOTRE QUOTIDIEN", "YOUR EVERYDAY")}</span>
            <nav className="main-nav" aria-label={tr("Navigation principale", "Main navigation")}>
              {nav.map((n) => (
                <button
                  key={n.id}
                  className={`nav-item ${tab === n.id ? "active" : ""}`}
                  onClick={() => go(n.id)}
                >
                  <span className="nav-icon">
                    <Icon name={n.icon} size={21} />
                  </span>
                  <span>{tr(n.fr, n.en)}</span>
                  {n.id === "exchange" && (
                    <span className="nav-new">{tr("Simple & rapide", "Simple & fast")}</span>
                  )}
                  {tab === n.id && <span className="nav-indicator" />}
                </button>
              ))}
            </nav>
            <div className="sidebar-bottom">
              <div className="help-card">
                <span className="help-symbol">
                  <Icon name="help" size={22} />
                </span>
                <h3>{tr("À vos côtés.", "Here for you.")}</h3>
                <p>
                  {tr(
                    "Une question ? On est là pour vous accompagner.",
                    "A question? We’re here to help you along the way.",
                  )}
                </p>
                <button
                  onClick={() =>
                    showInfo(
                      tr("À vos côtés, à chaque étape.", "By your side, every step."),
                      tr(
                        "Retrouvez les réponses sur les échanges, le Mobile Money et la vérification de votre identité. NEEXA est actuellement un prototype : aucun paiement ni document n’est envoyé. Pour préparer un échange, choisissez votre pays, votre montant et votre moyen de paiement. Les taux, frais et disponibilités devront être validés par un service connecté.",
                        "Find answers about exchanges, Mobile Money and identity verification. NEEXA is currently a prototype: no payment or document is sent. To prepare an exchange, choose your country, amount and payment method. Rates, fees and availability must be validated by a connected service.",
                      ),
                    )
                  }
                >
                  {tr("Centre d’aide", "Help centre")}
                  <Icon name="external" size={14} />
                </button>
              </div>
              <div className="sidebar-footer">
                <Logo small />
                <span>
                  {tr("Pensé pour vous. Sans frontières.", "Made for you. Without borders.")}
                </span>
              </div>
            </div>
          </aside>

          <div className="main-shell">
            <header className="topbar">
              <div className="topbar-location">
                <span className="desktop-page-name">
                  {tr(nav.find((n) => n.id === tab)!.fr, nav.find((n) => n.id === tab)!.en)}
                </span>
                <button
                  className="mobile-brand"
                  onClick={() => setModal("welcome")}
                  aria-label={tr("Découvrir NEEXA", "Discover NEEXA")}
                >
                  <Logo />
                </button>
                <span className="header-divider" />
                {pill}
              </div>
              <div className="topbar-actions">
                <button className="country-button" onClick={() => setModal("country")}>
                  <span className="flag">{country.flag}</span>
                  <span>{countryName()}</span>
                  <Icon name="chevron" size={12} />
                </button>
                <div className="language-control">
                  <button
                    className="language-button"
                    onClick={() => setLanguageMenu(!languageMenu)}
                  >
                    <Icon name="globe" size={16} />
                    {lang.toUpperCase()}
                    <span className="down-chevron">⌄</span>
                  </button>
                  {languageMenu && (
                    <div className="language-menu">
                      {[
                        ["fr", "Français"],
                        ["en", "English"],
                      ].map(([value, label]) => (
                        <button key={value} onClick={() => changeLanguage(value)}>
                          {label}
                          {lang === value && <Icon name="check" size={15} />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="header-divider" />
                <button
                  className="icon-button notification-button"
                  aria-label={tr("Notifications", "Notifications")}
                  onClick={() => setModal("notifications")}
                >
                  <Icon name="bell" />
                  <span />
                </button>
                <button
                  className="avatar"
                  onClick={() => go("profile")}
                  aria-label={tr("Ouvrir le profil", "Open profile")}
                >
                  {signedIn && firstName ? (
                    firstName.charAt(0).toUpperCase()
                  ) : (
                    <Icon name="user" size={19} />
                  )}
                </button>
              </div>
            </header>
            <main>
              {tab === "home" && (
                <>
                  <div className="page-intro">
                    <div>
                      <div className="eyebrow">
                        {tr("VOTRE MONDE, EN MOUVEMENT", "YOUR WORLD, IN MOTION")}
                        <span className="little-line" />
                      </div>
                      <h1>
                        {signedIn && firstName
                          ? `${tr("Bonjour", "Hello")}, ${firstName}.`
                          : tr("Bienvenue chez vous.", "Welcome to your world.")}
                        <span className="greeting-dot" />
                      </h1>
                      <p>
                        {tr(
                          "Vos échanges, en toute simplicité. Vos ambitions, sans frontières.",
                          "Effortless exchanges. Ambitions without borders.",
                        )}
                      </p>
                    </div>
                    <button
                      className="subtle-button intro-help"
                      onClick={() => setModal("welcome")}
                    >
                      <Icon name="info" size={16} />
                      {tr("Découvrir NEEXA", "Discover NEEXA")}
                    </button>
                  </div>
                  <div className="home-top-grid">
                    <section className="hero-card">
                      <div className="hero-grid" />
                      <div className="hero-topline">
                        <Logo small />
                      </div>
                      <div className="hero-copy">
                        <h2>
                          {tr("Votre argent.", "Your money.")}
                          <br />
                          {tr("Un monde", "A world of")}
                          <br />
                          <span>{tr("de possibilités.", "possibilities.")}</span>
                        </h2>
                        <p>
                          {tr(
                            "Du Mobile Money aux actifs numériques.",
                            "From Mobile Money to digital assets.",
                          )}
                          <br />
                          {tr(
                            "Et inversement. C’est aussi simple que ça.",
                            "And back again. It’s that simple.",
                          )}
                        </p>
                        <button className="hero-cta" onClick={() => go("exchange")}>
                          {tr("Faire un échange", "Make an exchange")}
                          <span>
                            <Icon name="arrow" size={18} />
                          </span>
                        </button>
                      </div>
                      <div className="hero-art" aria-hidden="true">
                        <div className="orbit orbit-one" />
                        <div className="orbit orbit-two" />
                        <div className="orbit orbit-three" />
                        <div className="art-axis" />
                        <div className="art-currency art-cfa">
                          <small>FRANC CFA</small>
                          <strong>
                            F<span>CFA</span>
                          </strong>
                          <div className="coin-lines" />
                        </div>
                        <div className="art-currency art-usdt">
                          <span>₮</span>
                          <small>USDT</small>
                        </div>
                        <div className="art-swap">
                          <Icon name="exchange" size={26} />
                        </div>
                        <span className="art-star star-one">+</span>
                        <span className="art-star star-two">+</span>
                        <div className="art-dot dot-one" />
                        <div className="art-dot dot-two" />
                        <span className="orbit-label">LOCAL ↔ DIGITAL</span>
                      </div>
                      <div className="hero-bottom">
                        <span>
                          <Icon name="phone" size={14} />
                          Mobile Money
                        </span>
                        <span className="hero-bottom-dot" />
                        <span>{tr("Monnaies locales", "Local currencies")}</span>
                        <span className="hero-bottom-dot" />
                        <span>{tr("Actifs numériques", "Digital assets")}</span>
                      </div>
                    </section>
                    {converter()}
                  </div>
                  <div className="trust-strip">
                    <span>
                      <Icon name="shield" size={17} />
                      <strong>{tr("La confiance, avant tout.", "Trust comes first.")}</strong>
                    </span>
                    <span>
                      {tr(
                        "Vos choix sont clairs. Vos données restent les vôtres.",
                        "Clear choices. Your data stays yours.",
                      )}
                    </span>
                    <button
                      onClick={() => {
                        setKycStep(0);
                        setModal("kyc");
                      }}
                    >
                      {tr("Notre approche sécurité", "Our approach to security")}
                      <Icon name="arrow" size={14} />
                    </button>
                  </div>
                  <div className="home-bottom-grid">
                    <section className="activity-panel panel">
                      <div className="section-heading">
                        <h2>
                          {tr("Votre activité récente", "Your recent activity")}
                          <span className="count-pill">
                            {requests.length.toString().padStart(2, "0")}
                          </span>
                        </h2>
                        <button className="text-button muted" onClick={() => go("activity")}>
                          {tr("Tout voir", "View all")}
                          <Icon name="arrow" size={15} />
                        </button>
                      </div>
                      {requestList(3)}
                    </section>
                    <section className="getting-started panel">
                      <div className="section-heading">
                        <h2>{tr("On fait connaissance ?", "Let’s get to know you.")}</h2>
                        <span className="progress-fraction">{signedIn ? "1" : "0"}/3</span>
                      </div>
                      <p>
                        {tr(
                          "Quelques étapes pour bien démarrer.",
                          "A few steps to get you started.",
                        )}
                      </p>
                      <div className="progress-track">
                        <span style={{ width: signedIn ? "33%" : "5%" }} />
                      </div>
                      <button
                        className={`onboarding-row ${signedIn ? "done" : ""}`}
                        onClick={() => (signedIn ? go("profile") : startAuth("signup"))}
                      >
                        <span className="step-circle">
                          {signedIn ? <Icon name="check" size={13} /> : "1"}
                        </span>
                        <span>
                          <strong>{tr("Créer votre compte", "Create your account")}</strong>
                          <small>
                            {tr(
                              "Le début de quelque chose de grand.",
                              "The start of something great.",
                            )}
                          </small>
                        </span>
                        <Icon name="chevron" size={16} />
                      </button>
                      <button
                        className="onboarding-row"
                        onClick={() => {
                          setKycStep(0);
                          setModal("kyc");
                        }}
                      >
                        <span className="step-circle">2</span>
                        <span>
                          <strong>{tr("Vérifier votre identité", "Verify your identity")}</strong>
                          <small>
                            {tr("Un espace plus sûr, pour tous.", "A safer space, for everyone.")}
                          </small>
                        </span>
                        <Icon name="chevron" size={16} />
                      </button>
                      <button className="onboarding-row" onClick={() => go("exchange")}>
                        <span className="step-circle">3</span>
                        <span>
                          <strong>
                            {tr("Préparer votre premier échange", "Prepare your first exchange")}
                          </strong>
                          <small>{tr("À votre rythme. Toujours.", "At your pace. Always.")}</small>
                        </span>
                        <Icon name="chevron" size={16} />
                      </button>
                    </section>
                  </div>
                  <div className="payment-footer">
                    <span>
                      {tr(
                        "LE MOBILE MONEY, AU CŒUR DE VOTRE QUOTIDIEN",
                        "MOBILE MONEY, AT THE HEART OF YOUR EVERYDAY",
                      )}
                    </span>
                    <div>
                      <>
                        {country.operators.length ? (
                          country.operators.slice(0, 2).map((op) => (
                            <span
                              key={op}
                              className={op.includes("Moov") ? "moov-wordmark" : "mtn-wordmark"}
                            >
                              {op}
                            </span>
                          ))
                        ) : (
                          <span className="payment-location">
                            {tr("Moyens locaux à venir", "Local methods coming soon")}
                          </span>
                        )}
                      </>
                      <span className="payment-location">
                        {country.flag}{" "}
                        {tr("Des moyens adaptés à votre pays.", "Payment methods that feel local.")}
                      </span>
                    </div>
                    <small>
                      {tr(
                        "Disponibilité à confirmer. Aucun partenariat revendiqué.",
                        "Availability to be confirmed. No partnership claimed.",
                      )}
                    </small>
                  </div>
                </>
              )}

              {tab === "exchange" && (
                <>
                  <div className="page-intro">
                    <div>
                      <div className="eyebrow">
                        {tr("LOCAL. DIGITAL. SANS DÉTOUR.", "LOCAL. DIGITAL. NO DETOURS.")}
                      </div>
                      <h1>{tr("Vos échanges, à votre façon.", "Your exchange, your way.")}</h1>
                      <p>
                        {tr(
                          "Choisissez ce que vous donnez. Décidez de ce que vous recevez.",
                          "Choose what you give. Decide what you receive.",
                        )}
                      </p>
                    </div>
                    {pill}
                  </div>
                  <div className="exchange-layout">
                    <div>
                      {converter(true)}
                      <div className="prototype-notice">
                        <Icon name="info" size={18} />
                        <p>
                          <strong>{tr("Explorez en toute liberté.", "Explore freely.")}</strong>
                          {tr(
                            "Ce prototype ne fournit pas de cotation. Les taux, les frais, les réseaux et la disponibilité devront être confirmés avant toute opération réelle.",
                            "This prototype does not provide quotes. Rates, fees, networks and availability must be confirmed before any real transaction.",
                          )}
                        </p>
                      </div>
                    </div>
                    <aside className="exchange-guide">
                      <div className="guide-art">
                        <Logo small />
                        <div />
                        <span>
                          <Icon name="exchange" size={30} />
                        </span>
                      </div>
                      <div className="eyebrow">
                        {tr("DEUX SENS. UNE SEULE EXPÉRIENCE.", "TWO DIRECTIONS. ONE EXPERIENCE.")}
                      </div>
                      <h2>
                        {tr(
                          "Le lien entre votre quotidien et demain.",
                          "Connecting your everyday to tomorrow.",
                        )}
                      </h2>
                      <p>
                        {tr(
                          "Le Mobile Money que vous connaissez. Les possibilités du numérique que vous découvrez.",
                          "The Mobile Money you know. The digital possibilities you’re discovering.",
                        )}
                      </p>
                      {[
                        [
                          "1",
                          tr("Choisissez votre sens", "Choose your direction"),
                          tr(
                            "Monnaie locale ou actif numérique : inversez en un geste.",
                            "Local currency or digital asset: switch with a tap.",
                          ),
                        ],
                        [
                          "2",
                          tr("Vérifiez chaque détail", "Review every detail"),
                          tr(
                            "Montant, moyen de paiement, taux et frais. Rien de caché.",
                            "Amount, payment method, rate and fees. Nothing hidden.",
                          ),
                        ],
                        [
                          "3",
                          tr("Gardez le fil", "Stay in the loop"),
                          tr(
                            "Chaque étape de votre demande, au même endroit.",
                            "Every step of your request, all in one place.",
                          ),
                        ],
                      ].map(([n, title, text]) => (
                        <div className="guide-step" key={n}>
                          <span>{n}</span>
                          <div>
                            <h3>{title}</h3>
                            <p>{text}</p>
                          </div>
                        </div>
                      ))}
                      <button
                        className="text-button"
                        onClick={() =>
                          showInfo(
                            tr("Comprendre les risques", "Understand the risks"),
                            tr(
                              "Les actifs numériques peuvent fluctuer et entraîner une perte de capital. Une transaction sur blockchain peut être irréversible. Vérifiez toujours le réseau, l’adresse et les frais. NEEXA ne fournit ici aucun conseil financier et n’exécute aucune transaction.",
                              "Digital assets can fluctuate and may result in loss of capital. Blockchain transactions can be irreversible. Always check the network, address and fees. This NEEXA prototype provides no financial advice and executes no transactions.",
                            ),
                          )
                        }
                      >
                        <Icon name="shield" size={16} />
                        {tr("Échanger en toute connaissance", "Exchange with confidence")}
                      </button>
                    </aside>
                  </div>
                </>
              )}

              {tab === "activity" && (
                <>
                  <div className="page-intro">
                    <div>
                      <div className="eyebrow">
                        {tr("CHAQUE ÉTAPE COMPTE", "EVERY STEP MATTERS")}
                      </div>
                      <h1>{tr("Gardez le fil.", "Stay in the loop.")}</h1>
                      <p>
                        {tr(
                          "Toutes vos demandes, une vision claire de leur évolution.",
                          "All your requests. A clear view of their progress.",
                        )}
                      </p>
                    </div>
                    {primary(tr("Nouvel échange", "New exchange"), () => go("exchange"))}
                  </div>
                  <section className="panel activity-full">
                    <div className="activity-toolbar">
                      <div className="filter-tabs">
                        {[
                          ["all", tr("Tout", "All")],
                          ["pending", tr("En cours", "In progress")],
                          ["completed", tr("Terminées", "Completed")],
                          ["cancelled", tr("Annulées", "Cancelled")],
                        ].map(([value, label]) => (
                          <button
                            className={filter === value ? "selected" : ""}
                            key={value}
                            onClick={() => setFilter(value)}
                          >
                            {label}
                            {value === "all" && <span>{requests.length}</span>}
                          </button>
                        ))}
                      </div>
                      <label className="search-input">
                        <Icon name="search" size={17} />
                        <input
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          placeholder={tr("Rechercher une demande", "Search requests")}
                        />
                      </label>
                    </div>
                    {activityState === "loading" ? (
                      <div className="loading-state">
                        <span className="spinner" />
                        <p>{tr("Chargement des demandes…", "Loading requests…")}</p>
                        <button className="text-button" onClick={() => setActivityState("normal")}>
                          {tr("Revenir", "Go back")}
                        </button>
                      </div>
                    ) : activityState === "error" ? (
                      <div className="empty-activity">
                        <Icon name="globe" size={32} />
                        <h3>{tr("La connexion fait une pause.", "Connection taking a break.")}</h3>
                        <p>
                          {tr(
                            "État réseau simulé. Vos demandes ne sont pas perdues.",
                            "Simulated network state. Your requests are not lost.",
                          )}
                        </p>
                        <button
                          className="button primary"
                          onClick={() => setActivityState("normal")}
                        >
                          {tr("Réessayer", "Try again")}
                          <Icon name="arrow" size={16} />
                        </button>
                      </div>
                    ) : (
                      requestList()
                    )}
                  </section>
                  <div className="activity-bottom">
                    <p>
                      <Icon name="lock" size={14} />
                      {tr(
                        "Seules vos simulations de cette session sont affichées.",
                        "Only simulations from this session are shown.",
                      )}
                    </p>
                    <details>
                      <summary>{tr("États du prototype", "Prototype states")}</summary>
                      <button onClick={() => setActivityState("loading")}>
                        {tr("Chargement", "Loading")}
                      </button>
                      <button onClick={() => setActivityState("error")}>
                        {tr("Erreur réseau", "Network error")}
                      </button>
                      <button onClick={() => setActivityState("normal")}>
                        {tr("État normal", "Normal state")}
                      </button>
                    </details>
                  </div>
                </>
              )}

              {tab === "profile" && (
                <>
                  <div className="page-intro">
                    <div>
                      <div className="eyebrow">
                        {tr("VOTRE ESPACE, VOS CHOIX", "YOUR SPACE, YOUR CHOICES")}
                      </div>
                      <h1>{tr("Tout simplement vous.", "Simply you.")}</h1>
                      <p>
                        {tr(
                          "Vos informations et vos préférences, au même endroit.",
                          "Your information and preferences, all in one place.",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="profile-layout">
                    <div>
                      <section className="profile-card panel">
                        <div className="profile-avatar">
                          {firstName && signedIn ? (
                            firstName[0].toUpperCase()
                          ) : (
                            <Icon name="user" size={32} />
                          )}
                        </div>
                        <h2>
                          {signedIn
                            ? `${firstName || tr("Votre", "Your")} ${lastName || tr("profil", "profile")}`
                            : tr("Faisons connaissance.", "Let’s get acquainted.")}
                        </h2>
                        <p>
                          {signedIn
                            ? email || tr("Session de démonstration", "Demo session")
                            : tr(
                                "Votre prochain chapitre commence ici.",
                                "Your next chapter starts here.",
                              )}
                        </p>
                        <span className="status-badge">{tr("Non vérifié", "Not verified")}</span>
                        {signedIn ? (
                          <>
                            <div className="profile-data">
                              <span>
                                <Icon name="globe" size={16} />
                                {country.flag} {countryName()}
                              </span>
                              <span>
                                <Icon name="phone" size={16} />
                                {phone
                                  ? `${country.code} ${phone}`
                                  : tr("Numéro à renseigner", "Add your phone number")}
                              </span>
                            </div>
                            <button
                              className="button secondary full-width"
                              onClick={() => setModal("edit")}
                            >
                              {tr("Modifier mon profil", "Edit my profile")}
                              <Icon name="user" size={16} />
                            </button>
                          </>
                        ) : (
                          <>
                            {primary(
                              tr("Créer mon compte", "Create my account"),
                              () => startAuth("signup"),
                              "full-width",
                            )}
                            <button className="text-button" onClick={() => startAuth("login")}>
                              {tr("J’ai déjà un compte", "I already have an account")}
                              <Icon name="arrow" size={15} />
                            </button>
                          </>
                        )}
                      </section>
                      <section className="kyc-card">
                        <span className="kyc-shield">
                          <Icon name="shield" size={28} />
                        </span>
                        <h3>{tr("La confiance se construit.", "Trust is built together.")}</h3>
                        <p>
                          {tr(
                            "Vérifiez votre identité pour préparer l’accès à toutes les possibilités de NEEXA.",
                            "Verify your identity to prepare for everything NEEXA has to offer.",
                          )}
                        </p>
                        <button
                          className="text-button"
                          onClick={() => {
                            setKycStep(0);
                            setModal("kyc");
                          }}
                        >
                          {tr("Centre de vérification", "Verification centre")}
                          <Icon name="arrow" size={16} />
                        </button>
                      </section>
                    </div>
                    <div className="settings-column">
                      <section className="panel settings-group">
                        <h3>{tr("À votre image", "Make it yours")}</h3>
                        {settingRow(
                          "globe",
                          tr("Langue de l’application", "Application language"),
                          () => changeLanguage(lang === "fr" ? "en" : "fr"),
                          undefined,
                          <span className="setting-value">
                            {lang === "fr" ? "Français" : "English"}
                            <Icon name="exchange" size={15} />
                          </span>,
                        )}
                        {settingRow(
                          dark ? "moon" : "sun",
                          tr("Apparence", "Appearance"),
                          changeTheme,
                          undefined,
                          <span className="setting-value">
                            {dark ? tr("Sombre", "Dark") : tr("Clair", "Light")}
                            <span className={`toggle ${dark ? "on" : ""}`} />
                          </span>,
                        )}
                        {settingRow(
                          "bell",
                          tr("Notifications", "Notifications"),
                          () => {
                            setNotifications(!notifications);
                            notify(
                              tr(
                                "Préférence enregistrée pour cette session.",
                                "Preference saved for this session.",
                              ),
                            );
                          },
                          tr(
                            "Suivi des demandes et informations utiles",
                            "Request updates and useful information",
                          ),
                          <span className={`toggle ${notifications ? "on" : ""}`} />,
                        )}
                      </section>
                      <section className="panel settings-group">
                        <h3>{tr("Votre tranquillité", "Peace of mind")}</h3>
                        {settingRow(
                          "shield",
                          tr("Sécurité et mot de passe", "Security and password"),
                          () => setModal("security"),
                        )}
                        {settingRow("phone", tr("Gestion des sessions", "Manage sessions"), () =>
                          showInfo(
                            tr("Vos sessions", "Your sessions"),
                            tr(
                              "Vous utilisez une session locale de découverte dans ce navigateur. Aucun compte réel n’est connecté. La déconnexion réinitialise la session de démonstration, sans affecter vos préférences de langue et de thème.",
                              "You are using a local explore session in this browser. No real account is connected. Signing out resets the demo session without affecting your language and theme preferences.",
                            ),
                          ),
                        )}
                        {settingRow("help", tr("Centre d’aide", "Help centre"), () =>
                          showInfo(
                            tr("Comment pouvons-nous vous aider ?", "How can we help?"),
                            tr(
                              "Échange : sélectionnez votre pays et un actif, puis préparez une demande. Mobile Money : seuls les moyens associés à votre pays sont proposés à titre indicatif. Identité : explorez le parcours de vérification depuis votre profil. Ce prototype ne transmet aucune donnée à un service financier.",
                              "Exchange: select your country and an asset, then prepare a request. Mobile Money: only methods associated with your country are suggested for illustration. Identity: explore verification from your profile. This prototype sends no data to a financial service.",
                            ),
                          ),
                        )}
                      </section>
                      <section className="panel settings-group">
                        <h3>{tr("En toute transparence", "Full transparency")}</h3>
                        {settingRow("lock", tr("Confidentialité", "Privacy"), () =>
                          showInfo(
                            tr("Vos données vous appartiennent.", "Your data belongs to you."),
                            tr(
                              "Ce prototype conserve uniquement la langue et le thème dans votre navigateur. Les informations de profil, documents et demandes sont temporaires et ne sont pas envoyés à un serveur. N’utilisez pas de véritables documents sensibles ou de mots de passe personnels.",
                              "This prototype stores only language and theme in your browser. Profile information, documents and requests are temporary and are not sent to a server. Do not use sensitive documents or personal passwords.",
                            ),
                          ),
                        )}
                        {settingRow(
                          "document",
                          tr("Conditions d’utilisation", "Terms of use"),
                          () =>
                            showInfo(
                              tr("Un cadre clair.", "A clear framework."),
                              tr(
                                "NEEXA est ici une démonstration interactive, non un service financier opérationnel. Les fonctionnalités ne constituent ni une offre commerciale ni un conseil en investissement. Aucune disponibilité de service, cotation ou relation avec un opérateur n’est garantie.",
                                "NEEXA is an interactive demonstration, not an operational financial service. Features are not a commercial offer or investment advice. No service availability, quote or relationship with an operator is guaranteed.",
                              ),
                            ),
                        )}
                        {settingRow("info", tr("À propos de NEEXA", "About NEEXA"), () =>
                          showInfo(
                            tr("D’ici. Vers demain.", "From here. To what’s next."),
                            tr(
                              "NEEXA imagine une finance plus accessible, pensée pour les réalités africaines et ouverte sur le monde. Premier marché de référence : le Bénin. Devise initiale : le franc CFA BCEAO (XOF). Prototype interactif · Version 0.1.",
                              "NEEXA envisions more accessible finance, designed for African realities and open to the world. First reference market: Benin. Initial currency: West African CFA franc (XOF). Interactive prototype · Version 0.1.",
                            ),
                          ),
                        )}
                      </section>
                      {signedIn && (
                        <button
                          className="logout-button"
                          onClick={() => {
                            setSignedIn(false);
                            setRequests([]);
                            setFirstName("");
                            setLastName("");
                            setEmail("");
                            setPhone("");
                            go("home");
                            notify(
                              tr(
                                "Vous êtes déconnecté du prototype.",
                                "You have signed out of the prototype.",
                              ),
                            );
                          }}
                        >
                          <Icon name="logout" size={18} />
                          {tr("Se déconnecter", "Sign out")}
                        </button>
                      )}
                    </div>
                  </div>
                </>
              )}
              <footer className="main-footer">
                <span>© {new Date().getFullYear()} NEEXA</span>
                <span>
                  <span className="footer-status" />
                  {tr("Un prototype. De grandes ambitions.", "A prototype. Bigger possibilities.")}
                </span>
                <button onClick={changeTheme} aria-label={tr("Changer de thème", "Switch theme")}>
                  <Icon name={dark ? "sun" : "moon"} size={15} />
                </button>
              </footer>
            </main>
          </div>
        </>
      )}

      {modal && (
        <div className={`modal-backdrop ${!signedIn ? "auth-gateway" : ""}`} onClick={closeModal}>
          <section
            ref={dialogRef}
            tabIndex={-1}
            className={`modal ${modal === "auth" || modal === "kyc" ? "modal-wide" : ""} ${modal === "welcome" ? "welcome-modal" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-label={
              modal === "welcome" ? tr("Bienvenue chez NEEXA", "Welcome to NEEXA") : modalTitle
            }
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top">
              <Logo small />
              {(signedIn || modal !== "welcome") && (
                <button
                  className="icon-button"
                  onClick={closeModal}
                  aria-label={tr("Fermer", "Close")}
                >
                  <Icon name="close" />
                </button>
              )}
            </div>
            {modal !== "welcome" && <h2>{modalTitle}</h2>}
            {modal === "welcome" && (
              <div className="welcome-content">
                <div className="welcome-language">
                  <button
                    className={lang === "fr" ? "selected" : ""}
                    onClick={() => changeLanguage("fr")}
                  >
                    FR
                  </button>
                  <button
                    className={lang === "en" ? "selected" : ""}
                    onClick={() => changeLanguage("en")}
                  >
                    EN
                  </button>
                </div>
                <div className="welcome-art">
                  <span />
                  <span />
                  <div>
                    <Logo small />
                  </div>
                  <i className="welcome-cfa">CFA</i>
                  <i className="welcome-tether">₮</i>
                </div>
                <div className="eyebrow">
                  {tr("D’ICI. VERS DEMAIN.", "FROM HERE. TO WHAT’S NEXT.")}
                </div>
                <h2>
                  {tr("Votre monde.", "Your world.")}
                  <br />
                  <span>{tr("Sans frontières.", "Without borders.")}</span>
                </h2>
                <p>
                  {tr(
                    "Le Mobile Money de votre quotidien. Les possibilités du numérique. Enfin connectés, simplement.",
                    "Your everyday Mobile Money. The possibilities of digital assets. Finally connected, effortlessly.",
                  )}
                </p>
                {primary(
                  tr("Créer un compte", "Create an account"),
                  () => startAuth("signup"),
                  "full-width",
                )}
                <button className="button secondary full-width" onClick={() => startAuth("login")}>
                  {tr("Se connecter", "Sign in")}
                  <Icon name="arrow" size={17} />
                </button>
                {signedIn && (
                  <button className="text-button" onClick={closeModal}>
                    {tr("Explorer le prototype", "Explore the prototype")}
                  </button>
                )}
                <div className="welcome-legal">
                  <button
                    onClick={() =>
                      showInfo(
                        tr("Conditions d’utilisation", "Terms of use"),
                        tr(
                          "NEEXA est un prototype interactif, sans opération financière réelle ni conseil en investissement. Aucun compte réel n’est créé.",
                          "NEEXA is an interactive prototype with no real financial transactions or investment advice. No real account is created.",
                        ),
                      )
                    }
                  >
                    {tr("Conditions d’utilisation", "Terms of use")}
                  </button>
                  <span>·</span>
                  <button
                    onClick={() =>
                      showInfo(
                        tr("Confidentialité", "Privacy"),
                        tr(
                          "Seuls le thème et la langue sont conservés dans votre navigateur. Les autres données restent temporaires. Ne saisissez aucune information sensible.",
                          "Only theme and language are stored in your browser. All other data is temporary. Do not enter sensitive information.",
                        ),
                      )
                    }
                  >
                    {tr("Confidentialité", "Privacy")}
                  </button>
                </div>
              </div>
            )}
            {modal === "country" && (
              <>
                <p className="modal-description">
                  {tr(
                    "Une expérience adaptée à votre quotidien. Disponibilités indicatives, à confirmer au lancement.",
                    "An experience tailored to your everyday. Indicative availability, to be confirmed at launch.",
                  )}
                </p>
                <div className="country-list">
                  {countries.map((c, i) => (
                    <button
                      className={`selection-row ${countryIndex === i ? "chosen" : ""}`}
                      key={c.code}
                      onClick={() => {
                        setCountryIndex(i);
                        setCurrency(c.currency);
                        setOperator(c.operators[0] || "");
                        setPhone("");
                        closeModal();
                      }}
                    >
                      <span className="country-flag">{c.flag}</span>
                      <span>
                        <strong>{countryName(c)}</strong>
                        <small>
                          {c.code} ·{" "}
                          {c.operators.join(" · ") ||
                            tr("Moyens locaux à venir", "Local methods coming soon")}
                        </small>
                      </span>
                      <span className="country-currency">{c.currency}</span>
                      {countryIndex === i && <Icon name="check" size={17} />}
                    </button>
                  ))}
                </div>
              </>
            )}
            {modal === "asset" && (
              <>
                <p className="modal-description">
                  {tr(
                    "Actifs présentés à titre illustratif. Le réseau sera à confirmer avant toute opération.",
                    "Assets shown for illustration. Network to be confirmed before any transaction.",
                  )}
                </p>
                {assets.map((a, i) => (
                  <button
                    key={a.symbol}
                    className={`selection-row ${i === assetIndex ? "chosen" : ""}`}
                    onClick={() => {
                      setAssetIndex(i);
                      closeModal();
                    }}
                  >
                    <span className="coin large-coin" style={{ background: a.color }}>
                      {a.sign}
                    </span>
                    <span>
                      <strong>{a.name}</strong>
                      <small>{a.symbol}</small>
                    </span>
                    {i === assetIndex && <Icon name="check" size={18} />}
                  </button>
                ))}
              </>
            )}
            {modal === "currency" && (
              <>
                <p className="modal-description">
                  {tr(
                    "La disponibilité des moyens de paiement dépend du pays sélectionné.",
                    "Payment method availability depends on the selected country.",
                  )}
                </p>
                {[
                  ...new Set([country.currency, "XOF", "XAF", "GHS", "NGN", "KES", "ZAR", "USD"]),
                ].map((c) => (
                  <button
                    key={c}
                    className={`selection-row ${currency === c ? "chosen" : ""}`}
                    onClick={() => {
                      setCurrency(c);
                      closeModal();
                    }}
                  >
                    <span className="currency-circle">
                      {c === "USD" ? "$" : c === "XOF" || c === "XAF" ? "F" : c[0]}
                    </span>
                    <span>
                      <strong>{c}</strong>
                      <small>
                        {
                          {
                            XOF: tr("Franc CFA BCEAO", "West African CFA franc"),
                            XAF: tr("Franc CFA BEAC", "Central African CFA franc"),
                            GHS: tr("Cedi ghanéen", "Ghanaian cedi"),
                            NGN: tr("Naira nigérian", "Nigerian naira"),
                            KES: tr("Shilling kényan", "Kenyan shilling"),
                            ZAR: tr("Rand sud-africain", "South African rand"),
                            USD: tr("Dollar américain", "US dollar"),
                          }[c]
                        }
                      </small>
                    </span>
                    {currency === c && <Icon name="check" size={18} />}
                  </button>
                ))}
              </>
            )}
            {modal === "notifications" && (
              <div className="modal-empty">
                <span className="empty-icon">
                  <Icon name="bell" size={30} />
                </span>
                <h3>{tr("Rien de nouveau, tout va bien.", "All quiet, all good.")}</h3>
                <p>
                  {tr(
                    "Les mises à jour de vos demandes et les informations importantes apparaîtront ici.",
                    "Updates about your requests and important information will appear here.",
                  )}
                </p>
                <span className="demo-label">
                  {tr(
                    "Prototype · notifications non connectées",
                    "Prototype · notifications not connected",
                  )}
                </span>
              </div>
            )}
            {modal === "info" && (
              <div className="info-content">
                <p>{info.content}</p>
                <button className="button primary full-width" onClick={closeModal}>
                  {tr("C’est compris", "Got it")}
                  <Icon name="check" size={17} />
                </button>
              </div>
            )}
            {modal === "auth" && (
              <>
                <p className="modal-description">
                  {tr(
                    "Parcours de démonstration. Ne saisissez pas votre véritable mot de passe. Aucun compte réel ne sera créé.",
                    "Demo flow. Do not use your real password. No real account will be created.",
                  )}
                </p>
                {authMode === "signup" && authStep < 3 && (
                  <div className="auth-progress">
                    {[0, 1, 2].map((i) => (
                      <span className={authStep >= i ? "active" : ""} key={i} />
                    ))}
                    <small>{authStep + 1}/3</small>
                  </div>
                )}
                {authStep >= 3 ? (
                  <div className="modal-empty">
                    <span className="success-icon">
                      <Icon name="check" size={30} />
                    </span>
                    <p>
                      {authMode === "reset"
                        ? tr(
                            "Parcours de réinitialisation terminé en démonstration. Aucun mot de passe réel n’a été modifié.",
                            "Password reset demo completed. No real password has been changed.",
                          )
                        : tr(
                            "Vous avez exploré l’inscription. Découvrez maintenant votre espace personnel en mode démo.",
                            "You’ve explored sign-up. Discover your personal space in demo mode.",
                          )}
                    </p>
                    {primary(tr("Continuer", "Continue"), () => {
                      if (authMode === "signup") setSignedIn(true);
                      closeModal();
                      go("home");
                    })}
                  </div>
                ) : (
                  <form className="form-stack" onSubmit={authSubmit}>
                    {authMode === "signup" && authStep === 0 && (
                      <>
                        <div className="form-columns">
                          <label>
                            {tr("Prénom", "First name")}
                            <input
                              required
                              autoComplete="given-name"
                              placeholder="Alex"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </label>
                          <label>
                            {tr("Nom", "Last name")}
                            <input
                              required
                              autoComplete="family-name"
                              placeholder="Dossou"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </label>
                        </div>
                        <label>
                          {tr("Adresse e-mail", "Email address")}
                          <input
                            required
                            type="email"
                            placeholder="vous@exemple.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </label>
                        <label>
                          {tr("Pays de résidence", "Country of residence")}
                          <select
                            value={countryIndex}
                            onChange={(e) => {
                              const i = Number(e.target.value);
                              setCountryIndex(i);
                              setCurrency(countries[i].currency);
                              setOperator(countries[i].operators[0] || "");
                            }}
                          >
                            {countries.map((c, i) => (
                              <option key={c.code} value={i}>
                                {c.flag} {countryName(c)} · {c.currency}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label>
                          {tr("Numéro de téléphone", "Phone number")}
                          <div className="phone-input">
                            <span>
                              {country.flag} {country.code}
                            </span>
                            <input
                              required
                              type="tel"
                              pattern="[0-9 ]{8,16}"
                              placeholder={countryIndex === 0 ? "01 00 00 00 00" : "00 00 00 00"}
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </label>
                      </>
                    )}
                    {(authMode === "login" || (authMode === "reset" && authStep === 0)) && (
                      <label>
                        {authMode === "login"
                          ? tr("E-mail ou numéro de téléphone", "Email or phone number")
                          : tr("Adresse e-mail", "Email address")}
                        <input
                          required
                          type={authMode === "reset" ? "email" : "text"}
                          placeholder={tr("Votre e-mail", "Your email")}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </label>
                    )}
                    {((authMode === "signup" && authStep === 0) ||
                      authMode === "login" ||
                      (authMode === "reset" && authStep === 2)) && (
                      <>
                        <label>
                          {tr("Mot de passe", "Password")}
                          <div className="password-input">
                            <input
                              required
                              minLength={8}
                              type={showPassword ? "text" : "password"}
                              value={password}
                              placeholder="••••••••"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              aria-label={tr(
                                "Afficher ou masquer le mot de passe",
                                "Show or hide password",
                              )}
                            >
                              <Icon name="eye" size={18} />
                            </button>
                          </div>
                        </label>
                        {authMode !== "login" && (
                          <>
                            <div className="password-strength">
                              <span className={password.length >= 8 ? "filled" : ""} />
                              <span className={/[A-Z]/.test(password) ? "filled" : ""} />
                              <span className={/[0-9]/.test(password) ? "filled" : ""} />
                              <small>
                                {tr(
                                  "8 caractères, majuscule et chiffre",
                                  "8 characters, uppercase and number",
                                )}
                              </small>
                            </div>
                            <label>
                              {tr("Confirmer le mot de passe", "Confirm password")}
                              <input
                                required
                                name="confirm"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                              />
                            </label>
                          </>
                        )}
                        {authMode === "login" && (
                          <button
                            type="button"
                            className="text-button align-right"
                            onClick={() => {
                              setAuthMode("reset");
                              setAuthStep(0);
                              setPassword("");
                            }}
                          >
                            {tr("Mot de passe oublié ?", "Forgot password?")}
                          </button>
                        )}
                      </>
                    )}
                    {((authMode === "signup" && authStep > 0) ||
                      (authMode === "reset" && authStep === 1)) && (
                      <div className="otp-section">
                        <span className="empty-icon">
                          <Icon name={authStep === 2 ? "phone" : "mail"} size={28} />
                        </span>
                        <p>
                          {tr("Destination de démonstration :", "Demo destination:")}{" "}
                          <strong>
                            {authStep === 2 && authMode === "signup"
                              ? `${country.code} •••• ${phone.slice(-2)}`
                              : `${email.slice(0, 2)}•••@${email.split("@")[1] || "exemple.com"}`}
                          </strong>
                        </p>
                        <label>
                          {tr("Code à 6 chiffres", "6-digit code")}
                          <input
                            className="otp-input"
                            name="otp"
                            required
                            pattern="[0-9]{6}"
                            maxLength={6}
                            inputMode="numeric"
                            placeholder="000000"
                          />
                        </label>
                        <small>
                          {tr(
                            "Aucun code envoyé. Utilisez 123456 pour explorer.",
                            "No code sent. Use 123456 to explore.",
                          )}
                        </small>
                        <button
                          type="button"
                          className="text-button"
                          onClick={() =>
                            notify(
                              tr(
                                "Mode démo : utilisez 123456. Aucun SMS ni e-mail envoyé.",
                                "Demo mode: use 123456. No SMS or email sent.",
                              ),
                            )
                          }
                        >
                          {tr("Renvoyer le code", "Resend code")}
                        </button>
                      </div>
                    )}
                    {authMode === "signup" && authStep === 0 && (
                      <label className="checkbox-label">
                        <input type="checkbox" required />
                        <span>
                          {tr(
                            "J’accepte les conditions du prototype et sa politique de confidentialité : aucune opération financière réelle, données temporaires et non transmises.",
                            "I accept the prototype terms and privacy policy: no real financial transactions, temporary data that is not transmitted.",
                          )}
                        </span>
                      </label>
                    )}
                    {formError && (
                      <p className="error-text" role="alert">
                        {formError}
                      </p>
                    )}
                    <button className="button primary full-width" type="submit">
                      {authMode === "login"
                        ? tr("Se connecter · Démo", "Sign in · Demo")
                        : authMode === "signup" && authStep === 0
                          ? tr("Créer mon compte · Démo", "Create account · Demo")
                          : tr("Continuer la simulation", "Continue simulation")}
                      <Icon name="arrow" size={17} />
                    </button>
                    {authStep === 0 && (
                      <button
                        type="button"
                        className="text-button centered"
                        onClick={() => startAuth(authMode === "login" ? "signup" : "login")}
                      >
                        {authMode === "login"
                          ? tr("Nouveau ici ? Créer un compte", "New here? Create an account")
                          : tr("Déjà un compte ? Se connecter", "Already a member? Sign in")}
                      </button>
                    )}
                  </form>
                )}
              </>
            )}
            {modal === "kyc" && (
              <>
                <p className="modal-description">
                  {tr(
                    "Un espace de confiance commence par vous. Parcours visuel uniquement : aucun document n’est transmis.",
                    "A trusted space starts with you. Visual flow only: no document is transmitted.",
                  )}
                </p>
                {kycStep === 0 ? (
                  <>
                    <div className="kyc-status">
                      <span className="setting-icon">
                        <Icon name="shield" size={27} />
                      </span>
                      <div>
                        <strong>{tr("Niveau 0 · Non vérifié", "Level 0 · Not verified")}</strong>
                        <p>
                          {tr(
                            "Préparez votre vérification en quelques étapes.",
                            "Prepare your verification in a few steps.",
                          )}
                        </p>
                      </div>
                    </div>
                    {[
                      ["user", tr("Vos informations personnelles", "Your personal information")],
                      ["document", tr("Un document d’identité", "An identity document")],
                      ["camera", tr("Une vérification faciale", "A face verification")],
                    ].map(([icon, label], i) => (
                      <div className="kyc-checklist" key={icon}>
                        <span>{i + 1}</span>
                        <Icon name={icon as IconName} size={19} />
                        <strong>{label}</strong>
                        <Icon name="chevron" size={15} />
                      </div>
                    ))}
                    {primary(
                      tr("Explorer la vérification", "Explore verification"),
                      () => setKycStep(1),
                      "full-width",
                    )}
                    <p className="secure-caption">
                      <Icon name="lock" size={13} />
                      {tr(
                        "N’utilisez pas de véritables documents personnels.",
                        "Do not use real personal documents.",
                      )}
                    </p>
                    <details className="kyc-states">
                      <summary>
                        {tr(
                          "Comprendre les statuts de vérification",
                          "Understand verification statuses",
                        )}
                      </summary>
                      {[
                        [
                          tr("Non vérifié", "Not verified"),
                          tr(
                            "Votre parcours n’a pas encore commencé.",
                            "Your journey has not started yet.",
                          ),
                        ],
                        [
                          tr("En cours d’examen", "Under review"),
                          tr(
                            "Le service examine vos informations.",
                            "The service is reviewing your information.",
                          ),
                        ],
                        [
                          tr("Vérifié", "Verified"),
                          tr(
                            "Identité confirmée par le service connecté uniquement.",
                            "Identity confirmed by the connected service only.",
                          ),
                        ],
                        [
                          tr("Refusé", "Declined"),
                          tr(
                            "Un motif et les possibilités de recours doivent être fournis.",
                            "A reason and appeal options must be provided.",
                          ),
                        ],
                        [
                          tr("Informations complémentaires requises", "More information required"),
                          tr(
                            "Des éléments supplémentaires sont nécessaires.",
                            "Additional details are needed.",
                          ),
                        ],
                      ].map(([s, d]) => (
                        <p key={s}>
                          <strong>{s}</strong>
                          {d}
                        </p>
                      ))}
                    </details>
                  </>
                ) : kycStep === 1 ? (
                  <form
                    className="form-stack"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setKycStep(2);
                    }}
                  >
                    <span className="step-label">
                      {tr("ÉTAPE 1 SUR 3 · INFORMATIONS", "STEP 1 OF 3 · INFORMATION")}
                    </span>
                    <label>
                      {tr("Nom complet", "Full name")}
                      <input
                        required
                        placeholder={tr("Comme sur votre document", "As shown on your document")}
                        defaultValue={`${firstName} ${lastName}`.trim()}
                      />
                    </label>
                    <div className="form-columns">
                      <label>
                        {tr("Date de naissance", "Date of birth")}
                        <input
                          required
                          type="date"
                          max={new Date(new Date().setFullYear(new Date().getFullYear() - 18))
                            .toISOString()
                            .slice(0, 10)}
                        />
                      </label>
                      <label>
                        {tr("Nationalité", "Nationality")}
                        <select>
                          {countries.map((c) => (
                            <option key={c.code}>{countryName(c)}</option>
                          ))}
                        </select>
                      </label>
                    </div>
                    <label>
                      {tr("Pays de résidence", "Country of residence")}
                      <select defaultValue={countryName()}>
                        {countries.map((c) => (
                          <option key={c.code}>{countryName(c)}</option>
                        ))}
                      </select>
                    </label>
                    <label>
                      {tr("Adresse de résidence", "Residential address")}
                      <input
                        required
                        placeholder={tr("Rue, quartier, ville", "Street, area, city")}
                      />
                    </label>
                    <button className="button primary full-width">
                      {tr("Continuer", "Continue")}
                      <Icon name="arrow" size={17} />
                    </button>
                  </form>
                ) : kycStep === 2 ? (
                  <div className="form-stack">
                    <span className="step-label">
                      {tr("ÉTAPE 2 SUR 3 · DOCUMENT", "STEP 2 OF 3 · DOCUMENT")}
                    </span>
                    <label>
                      {tr("Type de document", "Document type")}
                      <select
                        value={docType}
                        onChange={(e) => {
                          setDocType(e.target.value);
                          setDocFront("");
                          setDocBack("");
                        }}
                      >
                        <option value="id">
                          {tr("Carte nationale d’identité", "National identity card")}
                        </option>
                        <option value="passport">{tr("Passeport", "Passport")}</option>
                        <option value="licence">
                          {tr(
                            "Permis de conduire · sous réserve d’acceptation",
                            "Driving licence · subject to acceptance",
                          )}
                        </option>
                      </select>
                    </label>
                    <p className="soft-note">
                      {tr(
                        "Utilisez une image de test. Elle reste uniquement dans cette session.",
                        "Use a test image. It stays only in this session.",
                      )}
                    </p>
                    {["front", ...(docType !== "passport" ? ["back"] : [])].map((side) => (
                      <label className="upload-zone" key={side}>
                        <Icon name="camera" size={25} />
                        <strong>
                          {side === "front"
                            ? tr(
                                docType === "passport" ? "Page d’identité" : "Recto du document",
                                docType === "passport" ? "Identity page" : "Front of document",
                              )
                            : tr("Verso du document", "Back of document")}
                        </strong>
                        <span>
                          {(side === "front" ? docFront : docBack) ||
                            tr("Choisir une image de test", "Choose a test image")}
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              if (side === "front") setDocFront(file.name);
                              else setDocBack(file.name);
                            }
                          }}
                        />
                      </label>
                    ))}
                    <button
                      className="button primary full-width"
                      disabled={!docFront || (docType !== "passport" && !docBack)}
                      onClick={() => setKycStep(3)}
                    >
                      {tr("Confirmer les images", "Confirm images")}
                      <Icon name="arrow" size={17} />
                    </button>
                    <button className="text-button centered" onClick={() => setKycStep(3)}>
                      {tr("Continuer sans document · Démo", "Continue without a document · Demo")}
                    </button>
                  </div>
                ) : kycStep === 3 ? (
                  <div className="face-step">
                    <span className="step-label">
                      {tr(
                        "ÉTAPE 3 SUR 3 · VÉRIFICATION FACIALE",
                        "STEP 3 OF 3 · FACE VERIFICATION",
                      )}
                    </span>
                    <div className={`face-frame ${kycPreview ? "scanning" : ""}`}>
                      <Icon name="user" size={100} />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <h3>
                      {tr(
                        kycPreview
                          ? "Parfait. Regardez devant vous."
                          : "Montrez votre plus beau profil.",
                        kycPreview
                          ? "Great. Look straight ahead."
                          : "Let’s put a face to the name.",
                      )}
                    </h3>
                    <p>
                      {tr(
                        "Placez votre visage dans le cadre, dans un endroit bien éclairé. Retirez lunettes et couvre-chef.",
                        "Centre your face in the frame in a well-lit place. Remove glasses and headwear.",
                      )}
                    </p>
                    <span className="demo-label">
                      {tr(
                        "Aucune caméra activée · simulation visuelle",
                        "No camera active · visual simulation",
                      )}
                    </span>
                    {primary(
                      tr(
                        kycPreview ? "Terminer la simulation" : "Commencer la simulation",
                        kycPreview ? "Finish simulation" : "Start simulation",
                      ),
                      () => (kycPreview ? setKycStep(4) : setKycPreview(true)),
                      "full-width",
                    )}
                  </div>
                ) : (
                  <div className="modal-empty">
                    <span className="success-icon">
                      <Icon name="check" size={30} />
                    </span>
                    <h3>{tr("Vous connaissez le chemin.", "Now you know the way.")}</h3>
                    <p>
                      {tr(
                        "Parcours de démonstration terminé. Votre identité n’a pas été vérifiée et aucun document n’a été envoyé. Dans le service connecté, vous retrouverez ici le résultat de l’examen et les éventuelles demandes de complément.",
                        "Demo flow complete. Your identity has not been verified and no document has been sent. In the connected service, you will find the review result and any requests for additional information here.",
                      )}
                    </p>
                    {primary(tr("Retour à mon espace", "Back to my space"), closeModal)}
                  </div>
                )}
                {kycStep > 0 && kycStep < 4 && (
                  <button
                    className="text-button centered back-step"
                    onClick={() => {
                      setKycStep(kycStep - 1);
                      setKycPreview(false);
                    }}
                  >
                    {tr("Étape précédente", "Previous step")}
                  </button>
                )}
              </>
            )}
            {modal === "payment" && (
              <form
                className="form-stack"
                onSubmit={(e) => {
                  e.preventDefault();
                  setModal("review");
                }}
              >
                <p className="modal-description">
                  {tr(
                    "Moyens locaux présentés sans partenariat avec les opérateurs. Aucune opération ne sera effectuée.",
                    "Local methods shown without operator partnerships. No transaction will be made.",
                  )}
                </p>
                <button
                  type="button"
                  className="exchange-country"
                  onClick={() => setModal("country")}
                >
                  <span>
                    {country.flag} {countryName()}
                  </span>
                  <span>
                    {country.code}
                    <Icon name="chevron" size={14} />
                  </span>
                </button>
                {currency !== country.currency ? (
                  <div className="warning-notice">
                    <Icon name="info" size={19} />
                    <p>
                      {tr(
                        `Les moyens locaux de ${countryName()} utilisent ${country.currency}. Revenez à l’échange pour sélectionner cette devise ou choisissez un autre pays.`,
                        `Local methods in ${countryName()} use ${country.currency}. Return to exchange to select this currency or choose another country.`,
                      )}
                    </p>
                  </div>
                ) : country.operators.length ? (
                  <>
                    <label>
                      {tr(
                        reverse ? "Moyen de réception" : "Moyen de paiement",
                        reverse ? "Receiving method" : "Payment method",
                      )}
                    </label>
                    <div className="operator-options">
                      {country.operators.map((op) => (
                        <button
                          type="button"
                          className={operator === op ? "selected" : ""}
                          key={op}
                          onClick={() => setOperator(op)}
                        >
                          <span
                            className={`operator-logo ${op.includes("MTN") ? "mtn" : op.includes("Moov") ? "moov" : ""}`}
                          >
                            {op.includes("MTN") ? "MTN" : op.split(" ")[0]}
                          </span>
                          <strong>{op}</strong>
                          <span className="radio-circle">{operator === op && <span />}</span>
                        </button>
                      ))}
                    </div>
                    <label>
                      {tr("Numéro Mobile Money", "Mobile Money number")}
                      <div className="phone-input">
                        <span>{country.code}</span>
                        <input
                          required
                          type="tel"
                          pattern="[0-9 ]{8,16}"
                          placeholder="01 00 00 00 00"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </label>
                    {!reverse && (
                      <label>
                        {tr(
                          "Adresse de réception de l’actif · test uniquement",
                          "Asset receiving address · test only",
                        )}
                        <input
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder={tr("Votre adresse de test", "Your test address")}
                        />
                        <small>
                          {tr(
                            "Le réseau et la validité de l’adresse ne sont pas vérifiés dans ce prototype.",
                            "The network and address validity are not verified in this prototype.",
                          )}
                        </small>
                      </label>
                    )}
                  </>
                ) : (
                  <div className="warning-notice">
                    <Icon name="info" size={20} />
                    <p>
                      {tr(
                        "Aucun moyen Mobile Money configuré pour ce pays. Choisissez un autre pays pour explorer la simulation.",
                        "No Mobile Money method configured for this country. Choose another country to explore the simulation.",
                      )}
                    </p>
                  </div>
                )}
                <button
                  className="button primary full-width"
                  disabled={!country.operators.length || currency !== country.currency}
                >
                  {tr("Voir le récapitulatif", "View summary")}
                  <Icon name="arrow" size={17} />
                </button>
                <button type="button" className="text-button centered" onClick={closeModal}>
                  {tr("Revenir à l’échange", "Back to exchange")}
                </button>
              </form>
            )}
            {modal === "review" && (
              <>
                <p className="modal-description">
                  {tr(
                    "Prenez un instant pour vérifier les informations de votre simulation.",
                    "Take a moment to review your simulation details.",
                  )}
                </p>
                <div className="review-amount">
                  <span>{tr("VOUS DONNEZ", "YOU GIVE")}</span>
                  <strong>{money(amount, reverse ? asset.symbol : currency)}</strong>
                  <Icon name="exchange" size={22} />
                  <span>{tr("VOUS RECEVEZ", "YOU RECEIVE")}</span>
                  <strong className="unconfirmed">— {reverse ? currency : asset.symbol}</strong>
                  <small>
                    {tr(
                      "Montant non déterminé · aucune cotation disponible",
                      "Amount not determined · no quote available",
                    )}
                  </small>
                </div>
                <dl className="detail-list">
                  <div>
                    <dt>{tr("Pays", "Country")}</dt>
                    <dd>
                      {country.flag} {countryName()}
                    </dd>
                  </div>
                  <div>
                    <dt>{tr("Moyen local", "Local method")}</dt>
                    <dd>{operator}</dd>
                  </div>
                  <div>
                    <dt>{tr("Numéro", "Number")}</dt>
                    <dd>
                      {country.code} {phone}
                    </dd>
                  </div>
                  {!reverse && (
                    <div>
                      <dt>{tr("Adresse de test", "Test address")}</dt>
                      <dd className="address-text">{address}</dd>
                    </div>
                  )}
                  <div>
                    <dt>{tr("Réseau de l’actif", "Asset network")}</dt>
                    <dd>{tr("Non confirmé", "Not confirmed")}</dd>
                  </div>
                  <div>
                    <dt>{tr("Taux applicable", "Applicable rate")}</dt>
                    <dd>{tr("Indisponible", "Unavailable")}</dd>
                  </div>
                  <div>
                    <dt>{tr("Frais", "Fees")}</dt>
                    <dd>{tr("Non déterminés", "Not determined")}</dd>
                  </div>
                </dl>
                <div className="warning-notice">
                  <Icon name="info" size={20} />
                  <p>
                    {tr(
                      "Ceci n’est pas un ordre d’échange. Aucun fonds ne sera débité et aucune demande ne sera transmise à un opérateur.",
                      "This is not an exchange order. No funds will be debited and no request will be sent to an operator.",
                    )}
                  </p>
                </div>
                {primary(
                  tr("Créer une simulation", "Create a simulation"),
                  () => {
                    const r: Request = {
                      id: `DEMO-${String(requests.length + 1).padStart(3, "0")}`,
                      amount,
                      reverse,
                      asset: asset.symbol,
                      currency,
                      operator,
                      date: new Date(),
                    };
                    setRequests([r, ...requests]);
                    setSelectedRequest(r);
                    setModal("success");
                  },
                  "full-width",
                )}
                <button
                  className="text-button centered back-step"
                  onClick={() => setModal("payment")}
                >
                  {tr("Modifier les informations", "Edit details")}
                </button>
              </>
            )}
            {modal === "success" && (
              <div className="modal-empty">
                <span className="success-icon">
                  <Icon name="check" size={32} />
                </span>
                <h3>{selectedRequest?.id}</h3>
                <p>
                  {tr(
                    "Votre simulation a été ajoutée à l’activité de cette session. Aucun échange réel n’a été créé, payé ou confirmé.",
                    "Your simulation has been added to this session’s activity. No real exchange has been created, paid or confirmed.",
                  )}
                </p>
                {primary(
                  tr("Voir le suivi de démonstration", "View demo progress"),
                  () => setModal("detail"),
                  "full-width",
                )}
                <button
                  className="text-button centered back-step"
                  onClick={() => {
                    closeModal();
                    go("home");
                  }}
                >
                  {tr("Retour à l’accueil", "Back home")}
                </button>
              </div>
            )}
            {modal === "detail" && selectedRequest && (
              <>
                <div className="detail-header">
                  <span className="status-badge">
                    {tr("Simulation · non transmise", "Simulation · not submitted")}
                  </span>
                  <strong>{selectedRequest.id}</strong>
                  <small>
                    {selectedRequest.date.toLocaleString(lang === "fr" ? "fr-FR" : "en-GB")}
                  </small>
                </div>
                <dl className="detail-list">
                  <div>
                    <dt>{tr("Vous donnez", "You give")}</dt>
                    <dd>
                      {money(
                        selectedRequest.amount,
                        selectedRequest.reverse ? selectedRequest.asset : selectedRequest.currency,
                      )}
                    </dd>
                  </div>
                  <div>
                    <dt>{tr("Vous recevez", "You receive")}</dt>
                    <dd>
                      {tr("Non déterminé", "Not determined")}{" "}
                      {selectedRequest.reverse ? selectedRequest.currency : selectedRequest.asset}
                    </dd>
                  </div>
                  <div>
                    <dt>{tr("Moyen local", "Local method")}</dt>
                    <dd>{selectedRequest.operator}</dd>
                  </div>
                </dl>
                <div className="timeline">
                  {[
                    [
                      tr("Simulation créée", "Simulation created"),
                      tr(
                        "Enregistrée uniquement dans cette session.",
                        "Recorded in this session only.",
                      ),
                    ],
                    [
                      tr("En attente de connexion", "Awaiting connection"),
                      tr("Aucune demande envoyée au service.", "No request sent to the service."),
                    ],
                    [tr("Traitement", "Processing"), tr("Non commencé", "Not started")],
                    [
                      tr("Résultat de l’opération", "Transaction result"),
                      tr("Aucune opération réalisée", "No transaction made"),
                    ],
                  ].map(([title, desc], i) => (
                    <div className={i === 0 ? "current" : ""} key={title}>
                      <span>{i === 0 ? <Icon name="check" size={13} /> : ""}</span>
                      <section>
                        <h4>{title}</h4>
                        <p>{desc}</p>
                      </section>
                    </div>
                  ))}
                </div>
                <details className="kyc-states">
                  <summary>
                    {tr("Les statuts d’une demande connectée", "Connected request statuses")}
                  </summary>
                  <p>
                    {tr(
                      "Demande créée → En attente → En cours de traitement → Terminée. Une demande peut aussi être annulée, refusée ou nécessiter des informations complémentaires. Chaque changement doit être confirmé par le service.",
                      "Request created → Pending → Processing → Completed. A request can also be cancelled, declined or require more information. Each change must be confirmed by the service.",
                    )}
                  </p>
                </details>
                <button
                  className="button secondary full-width"
                  onClick={() => {
                    closeModal();
                    go("activity");
                  }}
                >
                  {tr("Voir mon activité", "View my activity")}
                  <Icon name="arrow" size={17} />
                </button>
              </>
            )}
            {modal === "edit" && (
              <form
                className="form-stack"
                onSubmit={(e) => {
                  e.preventDefault();
                  closeModal();
                  notify(
                    tr(
                      "Profil de démonstration mis à jour pour cette session.",
                      "Demo profile updated for this session.",
                    ),
                  );
                }}
              >
                <p className="modal-description">
                  {tr(
                    "Modifications temporaires, non envoyées à un serveur.",
                    "Temporary changes, not sent to a server.",
                  )}
                </p>
                <div className="form-columns">
                  <label>
                    {tr("Prénom", "First name")}
                    <input
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </label>
                  <label>
                    {tr("Nom", "Last name")}
                    <input
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </label>
                </div>
                <label>
                  {tr("E-mail", "Email")}
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                <label>
                  {tr("Numéro de téléphone", "Phone number")}
                  <div className="phone-input">
                    <span>{country.code}</span>
                    <input
                      required
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </label>
                <button className="button primary full-width">
                  {tr("Enregistrer · Cette session", "Save · This session")}
                  <Icon name="check" size={17} />
                </button>
              </form>
            )}
            {modal === "security" && (
              <>
                <p className="modal-description">
                  {tr(
                    "Votre tranquillité n’est pas une option. Les fonctions ci-dessous sont des parcours de démonstration.",
                    "Your peace of mind isn’t optional. The features below are demonstration flows.",
                  )}
                </p>
                {settingRow("lock", tr("Modifier le mot de passe", "Change password"), () => {
                  setAuthMode("reset");
                  setAuthStep(2);
                  setPassword("");
                  setModal("auth");
                })}
                {settingRow("phone", tr("Sessions et appareils", "Sessions and devices"), () =>
                  showInfo(
                    tr("Un seul espace de découverte.", "One explore space."),
                    tr(
                      "Seul ce navigateur utilise cette session de prototype. Aucun service d’authentification distant n’est connecté.",
                      "Only this browser uses this prototype session. No remote authentication service is connected.",
                    ),
                  ),
                )}
                <div className="prototype-notice">
                  <Icon name="shield" size={20} />
                  <p>
                    {tr(
                      "Ne communiquez jamais votre mot de passe ou votre code de vérification. NEEXA ne vous les demandera pas par message.",
                      "Never share your password or verification code. NEEXA will never ask for them in a message.",
                    )}
                  </p>
                </div>
              </>
            )}
          </section>
        </div>
      )}
      {toast && (
        <div className="toast" role="status">
          <Icon name="info" size={19} />
          {toast}
          <button onClick={() => setToast("")} aria-label={tr("Fermer", "Close")}>
            <Icon name="close" size={15} />
          </button>
        </div>
      )}
    </div>
  );
}
